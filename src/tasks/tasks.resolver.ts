import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { Form } from '../@generated/form/form.model';
import { FormTriggerInput } from './dto/form-trigger.input';
import { FormService } from './forms/form.service';
import { TaskService } from './tasks.service';

@Resolver('Task')
export class TaskResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly taskService: TaskService,
    private readonly formService: FormService
  ) {}

  @Mutation(() => Form)
  async submitTask(@Args('input') input: FormTriggerInput): Promise<Form> {
    const form = await this.formService.submitForm(input.formId, input.value);
    await this.taskService.submitTask(input.taskId, form.id);
    return form;
  }
}
