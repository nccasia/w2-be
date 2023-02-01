import { Injectable, Logger } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { TaskDefinetionService } from './definitions/task-definetion.service';
import { EventLogService } from './history/eventlog.service';
import { TaskWorkflowService } from './task-workflow.service';

@Injectable()
export class TaskFactoryService {
  private readonly logger = new Logger(TaskFactoryService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly taskDefinetionService: TaskDefinetionService,
    private readonly taskWorkflowService: TaskWorkflowService,
    private readonly eventLogService: EventLogService
  ) {}
  async setupNewTask(data: Task): Promise<Task> {
    this.logger.log(`setupNewTask ${data.id} ${data.key}`);
    const existingTask = await this.prisma.task.findUnique({
      where: { id: data.id },
    });

    const builder = await this.taskDefinetionService.getTaskBuilderFromExisting(
      existingTask.id
    );
    await builder.configureTask();
    if (existingTask.parentId) {
      await builder.configureParentTask();
    } else {
      await builder.configureSubtasks();
    }

    await builder.configureTaskSchema();

    const task = builder.getTask();

    await this.taskWorkflowService.executeTaskMachine(task.id);

    this.eventLogService.logNewTaskCreated(task);
    return task;
  }
}
