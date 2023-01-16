import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { TaskBuilder } from './task.builder';

@Injectable()
export class TaskDefinetionService {
  constructor(private readonly prisma: PrismaService) {}

  async getTaskBuilderFromExisting(task: Task): Promise<TaskBuilder> {
    return TaskBuilder.fromExistingTask(task, this.prisma);
  }
}
