import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { Form } from '../@generated/form/form.model';
import { FormTriggerInput } from './dto/form-trigger.input';
import { FormService } from './forms/form.service';
import { TaskWorkflowService } from './task-workflow.service';
import { TriggerService } from './triggers/trigger.service';

@Resolver('Task')
export class TaskResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly trigger: TriggerService,
    private readonly taskWorkflowService: TaskWorkflowService,
    private readonly formService: FormService
  ) {}

  @Mutation(() => Form)
  async submitTask(@Args('input') input: FormTriggerInput): Promise<Form> {
    const formValue = this.formService.serializeForm(input.formId, input.value);
    const trigger = await this.trigger.createFormTrigger(
      input.taskId,
      formValue
    );
    await this.taskWorkflowService.executeTaskTrigger(input.taskId, trigger.id);
    return this.prisma.form.findUnique({
      where: { id: input.formId },
    });
  }
}
