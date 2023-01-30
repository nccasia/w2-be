import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { PrismaService } from 'nestjs-prisma';
import { TaskMachine } from './fsm/task-machine';
import { TaskService } from './tasks.service';
import { TriggerService } from './triggers/trigger.service';

@Injectable()
export class TaskWorkflowService {
  constructor(
    private readonly taskService: TaskService,
    private readonly prisma: PrismaService,
    private readonly moduleRef: ModuleRef,
    private readonly triggerService: TriggerService
  ) {}

  async executeTaskMachine(taskId: number) {
    const taskMachine = new TaskMachine(taskId, this.prisma);
    await taskMachine.init();
    await taskMachine.run();
  }

  async executeTaskTrigger(taskId: number, triggerId: number) {
    const taskMachine = new TaskMachine(taskId, this.prisma);
    await taskMachine.init();

    const trigger = await this.triggerService.getTrigger(triggerId);
    taskMachine.triggerEvent(trigger.key, trigger.value);

    await taskMachine.run();
  }
}
