import { Injectable } from '@nestjs/common';
import { TriggerType, TriggerStatus, Form } from '@prisma/client';
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

  async createFormTrigger(taskId: number, form: Form) {
    const trigger = await this.prisma.trigger.create({
      data: {
        task: {
          connect: {
            id: taskId,
          },
        },
        key: `FORM_SUBMIT_${form.code}`,
        type: TriggerType.FORM_TRIGGER,
        status: TriggerStatus.NEW,
        value: form.values || {},
        name: 'Form Trigger',
      },
    });
    return trigger;
  }
}
