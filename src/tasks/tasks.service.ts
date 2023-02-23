import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { TaskWorkflowService } from './task-workflow.service';
import * as _ from 'lodash';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    private taskWorkflowService: TaskWorkflowService
  ) {}

  async submitTask(taskId: number, rawValues: object, key?: string) {
    console.log('submitTask', taskId, rawValues, key);
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });
    console.log('task values', task.values);

    if (typeof task.values === 'string') {
      task.values = { data: task.values };
    }

    const defaultValues = _.merge(task.values || {}, { taskId });
    const values = _.merge(defaultValues, { ...rawValues });
    const properties = _.merge(task.properties || {}, values);
    const updatedTask = await this.prisma.task.update({
      where: { id: taskId },
      data: {
        values: values as any,
        properties: properties as any,
      },
    });

    if (updatedTask.parentId) {
      const parrentValue = {
        [updatedTask.key]: values,
      };
      await this.submitTask(
        updatedTask.parentId,
        parrentValue,
        updatedTask.key
      );
    }

    if (task.config && task.config['resumeWebhookUrl']) {
      const response = await this.taskWorkflowService.triggerTaskWorkflow(
        taskId,
        `SUBMMIT&KEY=${key}`,
        values
      );
      console.log(response.data);
    }
    return updatedTask;
  }
}
