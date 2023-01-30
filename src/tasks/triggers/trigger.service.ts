import { Injectable } from '@nestjs/common';
import { TriggerType, TriggerStatus } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { TaskState } from '../fsm/task-state';

@Injectable()
export class TriggerService {
  constructor(private prisma: PrismaService) {}

  async getTrigger(triggerId: number) {
    return this.prisma.trigger.findUnique({
      where: { id: triggerId },
    });
  }

  async createFormTrigger(taskId: number, values: any) {
    const trigger = await this.prisma.trigger.create({
      data: {
        task: {
          connect: {
            id: taskId,
          },
        },
        key: 'SUBMIT_FORM',
        type: TriggerType.FORM_TRIGGER,
        status: TriggerStatus.NEW,
        value: values || {},
        name: 'Form Trigger',
      },
    });
    return trigger;
  }
}
