
import {Prisma} from '@prisma/client'




export class UpdateActivityDto {
  name?: string;
description?: string;
config?: Prisma.InputJsonValue;
}
