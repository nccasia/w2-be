import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { TaskWorkflowService } from './task-workflow.service';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    private taskWorkflowService: TaskWorkflowService
  ) {}

  async submitTask(taskId: number, rawValues: any) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });
    const values = Object.assign(task.values, { ...rawValues });
    const properties = Object.assign(task.properties, values);
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
      await this.submitTask(updatedTask.parentId, parrentValue);
    }

    if (task.config && task.config['resumeWebhookUrl']) {
      this.taskWorkflowService.triggerTaskWorkflow(taskId, 'SUBMMIT', values);
    }
    return updatedTask;
  }
}
