import { Injectable } from '@nestjs/common';
import { TriggerType, TriggerStatus } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { TaskState } from '../fsm/task-state';

@Injectable()
export class FormService {
  constructor(private prisma: PrismaService) {}

  async getForm(formId: number) {
    return this.prisma.form.findUnique({
      where: { id: formId },
    });
  }

  async validateForm(formId: number, values: any) {
    const form = await this.getForm(formId);
    const errors = null;
    return { errors, values };
  }

  async serializeForm(formId: number, values: any) {
    const form = await this.getForm(formId);
    const properties = { ...values };
    return properties;
  }
}
