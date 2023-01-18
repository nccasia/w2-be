import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { TaskDefinetionService } from './definitions/task-definetion.service';

@Injectable()
export class TaskFactoryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly taskDefinetionService: TaskDefinetionService
  ) {}
  async setupNewTask(data: Task): Promise<Task> {
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

    return task;
  }
}
