import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

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
