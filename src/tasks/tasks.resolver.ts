import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TriggerStatus, TriggerType } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { Task } from '../@generated/task/task.model';
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

  @Mutation('submitTask')
  async submitTask(@Args() input: FormTriggerInput): Promise<any> {
    const formValue = this.formService.serializeForm(input.formId, input.value);
    const trigger = await this.trigger.createFormTrigger(
      input.taskId,
      formValue
    );
    await this.taskWorkflowService.executeTaskTrigger(input.taskId, trigger.id);
    return {};
  }
}
