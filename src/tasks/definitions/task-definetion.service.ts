import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { TaskBuilder } from './task.builder';

@Injectable()
export class TaskDefinetionService {
  constructor(private readonly prisma: PrismaService) {}

  async getTaskBuilderFromExisting(id: number): Promise<TaskBuilder> {
    return TaskBuilder.fromExistingTask(id, this.prisma);
  }
}
