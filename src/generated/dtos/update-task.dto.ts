
import {Prisma} from '@prisma/client'




export class UpdateTaskDto {
  title?: string;
description?: string;
dueDate?: Date;
values?: Prisma.InputJsonValue;
}
