import { Injectable } from '@nestjs/common';
import { TriggerType, TriggerStatus } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { TaskState } from '../fsm/task-state';

@Injectable()
export class FormService {
  constructor(private prisma: PrismaService) {}

  async submitForm(formId: number, values: any) {
    const form = await this.prisma.form.update({
      where: { id: formId },
      data: {
        values: values,
      },
    });
    return form;
  }
}
