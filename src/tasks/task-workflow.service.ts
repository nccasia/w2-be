import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { PrismaService } from 'nestjs-prisma';
import { TaskMachine } from './fsm/task-machine';
import { TaskService } from './tasks.service';
import { TriggerService } from './triggers/trigger.service';
import { EventLogService } from './history/eventlog.service';

@Injectable()
export class TaskWorkflowService {
  constructor(
    private readonly taskService: TaskService,
    private readonly prisma: PrismaService,
    private readonly moduleRef: ModuleRef,
    private readonly triggerService: TriggerService,
    private readonly eventLogService: EventLogService
  ) {}

  async executeTaskMachine(taskId: number) {
    const taskMachine = new TaskMachine(
      taskId,
      this.prisma,
      this.eventLogService
    );
    await taskMachine.init();
    await taskMachine.run();
  }

  async executeTaskTrigger(taskId: number, triggerId: number) {
    const taskMachine = new TaskMachine(
      taskId,
      this.prisma,
      this.eventLogService
    );
    await taskMachine.init();

    await taskMachine.run();

    const trigger = await this.triggerService.getTrigger(triggerId);
    taskMachine.triggerEvent(trigger.key, trigger);
    await this.sleep(10000);
  }
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
