import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { interpret, Machine } from 'xstate';
import { TaskState } from './fsm/task-state';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  async updateTaskState(taskId: number, state: TaskState<any, any, any, any>) {
    return this.prisma.task.update({
      where: { id: taskId },
      data: {
        stateConfig: state.toJSON() as any,
      },
    });
  }

  async submitTask(taskId: number, rawValues: any) {
    const values = { ...rawValues };
    const properties = { ...values };
    return this.prisma.task.update({
      where: { id: taskId },
      data: {
        values: values as any,
        properties: properties as any,
      },
    });
  }
}
