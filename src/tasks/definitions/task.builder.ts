import { PrismaClient, Task, Prisma, TaskDefinition } from '@prisma/client';
import Handlebars from 'handlebars';
import { TaskSchema } from '../fsm/task-schema';

export class TaskBuilder {
  task: Task;
  definetionId: number;
  parentId: number;
  parentTask: Task;
  args: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput> =
    {};
  taskSchema: TaskSchema;

  static async fromExistingTask(
    taskId: number,
    prisma: PrismaClient
  ): Promise<TaskBuilder> {
    const builder = new TaskBuilder(prisma);
    return builder.loadExistingTask(taskId);
  }

  static async fromParentTask(
    parent: Task,
    def: TaskDefinition,
    prisma: PrismaClient
  ): Promise<TaskBuilder> {
    const builder = new TaskBuilder(prisma);
    await builder.markAsConfigured();
    await builder.loadDefinetion(def.id);
    await builder.loadParentTask(parent.id);
    return builder;
  }

  private subTasks: Task[] = [];
  private definetion: Prisma.TaskDefinitionGetPayload<{
    include: {
      subTaskDefinitions: true;
      form: true;
    };
  }>;

  constructor(private readonly prisma: PrismaClient) {}

  markAsConfigured() {
    this.args.status = 'NONE';
  }

  async loadExistingTask(taskId: number): Promise<this> {
    this.task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });
    if (this.task.parentId) {
      await this.loadParentTask(this.task.parentId);
    }
    if (this.task.definitionId) {
      await this.loadDefinetion(this.task.definitionId);
    }
    await this.loadSubTasks();
    await this.loadTaskSchema();
    return this;
  }

  async loadSubTasks(): Promise<this> {
    this.subTasks = await this.prisma.task.findMany({
      where: { parentId: this.task.id },
    });
    return this;
  }

  async configureTaskFromParent(): Promise<this> {
    if (!this.parentTask || !this.definetion) {
      throw new Error('Parent task or definition not loaded');
    }
    this.task = await this.prisma.task.create({
      data: {
        definition: {
          connect: {
            id: this.definetion.id,
          },
        },
        parentTask: {
          connect: {
            id: this.parentTask.id,
          },
        },
        key: this.definetion.keyTemplate,
        description: '',
        title: '',
        status: 'NONE',
        state: '',
        typeName: '',
        config: {},
        isActive: false,
        creator: {
          connect: {
            id: this.parentTask.creatorId,
          },
        },
        team: {
          connect: {
            id: this.parentTask.teamId,
          },
        },
        organization: {
          connect: {
            id: this.parentTask.organizationId,
          },
        },
      },
    });

    return this;
  }

  async loadDefinetion(definitionId?: number): Promise<this> {
    const defId = definitionId || this.definetionId;
    if (!defId) throw new Error('No definition id provided');

    const definetion = await this.prisma.taskDefinition.findUnique({
      where: { id: defId },
      include: {
        subTaskDefinitions: true,
        form: true,
      },
    });
    this.definetion = definetion;
    return this;
  }

  async loadTaskSchema(): Promise<this> {
    this.taskSchema = new TaskSchema();
    this.taskSchema.init(this.task.machineConfig);
    return this;
  }

  async loadParentTask(parentId: number): Promise<this> {
    this.parentId = parentId;
    const parent = await this.prisma.task.findUnique({
      where: { id: parentId },
    });
    this.parentTask = parent;
    return this;
  }

  async configureTask() {
    this.configureTaskDef();
    this.configureTaskKey();
    this.configureTaskTitle();
    await this.configureTaskForm();
    this.configureTaskDescription();
    await this.save();
    return this;
  }

  async configureTaskForm() {
    if (this.definetion.formId) {
      const form = await this.prisma.form.findUnique({
        where: { id: this.definetion.formId },
      });
      const payload = JSON.parse(JSON.stringify(form));
      payload.id = undefined;

      const newForm = await this.prisma.form.create({
        data: payload,
      });

      this.args.formId = newForm.id;
    }
  }

  async configureTaskSchema() {
    if (this.task.machineConfig && (this.task.machineConfig as any).states) {
      this.updateTaskSchema();
    } else {
      this.createTaskSchema();
    }
    await this.save();
    return this;
  }

  updateTaskSchema() {
    this.taskSchema = new TaskSchema();
    this.taskSchema.init(this.task.machineConfig);
    this.args.machineConfig = this.taskSchema.getSchema();
    return this;
  }

  createTaskSchema() {
    this.taskSchema = new TaskSchema();

    if (
      this.definetion.machineConfig &&
      (this.definetion.machineConfig as any).states
    ) {
      this.taskSchema.init(this.definetion.machineConfig);
    } else {
      this.taskSchema.init();
    }
    this.taskSchema.name(
      `${this.args.title}` ||
        `${this.task.title}` ||
        `Task Machine ${this.task.id}`
    );
    if (this.subTasks.length > 0) {
      this.taskSchema.enableParallelSubTasks();

      for (const subTask of this.subTasks) {
        this.taskSchema.addSubTask(subTask);
      }
    }
    this.args.machineConfig = this.taskSchema.getSchema();
    return this;
  }

  configureTaskDef(): this {
    this.args.type = this.definetion.title;
    this.args.typeName = this.definetion.title;
    this.args.cta = '';
    this.args.ctaName = '';
    this.definetion.config = {
      initialState: '',
      initialStateName: '',
      initialStatus: '',
      initialStatusName: '',
      intialStateValues: '',
      descriptionTemplate: '',
      titleTemplate: '',
      statusTemplate: '',
      ...(this.definetion.config as object),
    };

    this.args.state = this.definetion.config.initialState as string;
    this.args.stateName = this.definetion.config.initialStateName as string;
    this.args.status =
      (this.definetion.config.initialStatus as string) || 'NEW';
    this.args.statusName = this.definetion.config.initialStatusName as string;
    this.args.stateValues = this.definetion.config.intialStateValues as string;
    this.args.descriptionTemplate = this.definetion.descriptionTemplate;
    this.args.titleTemplate = this.definetion.titleTemplate;
    this.args.statusTemplate = this.definetion.statusTemplate;
    this.args.stateTemplate = this.definetion.stateTemplate;
    this.args.notificationTemplate = this.definetion.notificationTemplate;
    this.args.ctaTemplate = this.definetion.ctaTemplate;
    this.args.machineConfig = this.definetion.config.machineConfig;
    this.args.statusConfig = this.definetion.config.statusConfig;
    this.args.notificationConfig = this.definetion.config.notificationConfig;
    this.args.processConfig = this.definetion.config.processConfig;
    this.args.triggerConfig = this.definetion.config.triggerConfig;
    this.args.ctaConfig = this.definetion.config.ctaConfig;
    this.args.config = this.definetion.config;
    return this;
  }

  async configureParentTask(): Promise<this> {
    if (!this.parentTask) {
      throw new Error('Parent task not loaded');
    }
    if (!this.prisma) {
      throw new Error('Prisma client not loaded');
    }
    const builder = await TaskBuilder.fromExistingTask(
      this.parentTask.id,
      this.prisma
    );

    await builder.configureTaskSchema();

    return this;
  }

  configureTaskTitle(): this {
    if (typeof this.args.titleTemplate !== 'string') {
      throw new Error('No title template provided');
    }
    const context = this.getTemplateContext();
    this.args.title = this.renderTemplate(
      this.args.titleTemplate || this.task.titleTemplate,
      context,
      this.task.config
    );
    return this;
  }

  async configureTaskKey() {
    const context = this.getTemplateContext();
    this.args.key = this.renderTemplate(
      this.definetion.keyTemplate || '',
      context,
      this.task.config
    );
    return this;
  }

  configureTaskDescription(): this {
    if (typeof this.args.descriptionTemplate !== 'string') {
      throw new Error('No description template provided');
    }
    const context = this.getTemplateContext();
    this.args.description = this.renderTemplate(
      this.args.descriptionTemplate || this.task.descriptionTemplate,
      context,
      this.task.config
    );

    return this;
  }

  private renderTemplate(template = '', context: any, config: any): string {
    const templateFn = Handlebars.compile(template);
    const rendered = templateFn(context);
    return rendered;
  }

  async configureSubtasks(): Promise<this> {
    const subTaskDefs = this.definetion.subTaskDefinitions;
    for (const subTaskDef of subTaskDefs) {
      const newSubtaskBuilder = await TaskBuilder.fromParentTask(
        this.task,
        subTaskDef,
        this.prisma
      );
      await newSubtaskBuilder.configureTaskFromParent();
      await newSubtaskBuilder.configureTask();
      await newSubtaskBuilder.configureTaskSchema();
    }
    await this.loadSubTasks();
    return this;
  }

  private getTemplateContext(): any {
    return {
      task: this.task,
      definetion: this.definetion,
    };
  }

  getTaskArgs(): Prisma.XOR<
    Prisma.TaskUpdateInput,
    Prisma.TaskUncheckedUpdateInput
  > {
    return this.args;
  }

  save() {
    const data = this.getTaskArgs();
    return this.prisma.task.update({
      where: { id: this.task.id },
      data: {
        ...data,
      },
    });
  }

  getTask(): Task {
    return this.task;
  }

  getSubTasks(): Task[] {
    return this.subTasks;
  }
}
