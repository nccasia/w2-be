import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { interpret, createMachine } from 'xstate';
import { TaskMachine } from './fsm/task-machine';

@Injectable()
export class TaskFsmService {
  constructor(private prisma: PrismaService) {}

  async updateTask(taskId: number, newState: string) {
    const machine = new TaskMachine(taskId, this.prisma);
  }
}
