
import {Prisma} from '@prisma/client'




export class CreateTaskDto {
  title: string;
description: string;
dueDate: Date;
values?: Prisma.InputJsonValue;
}
