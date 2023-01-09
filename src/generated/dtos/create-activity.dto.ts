
import {Prisma} from '@prisma/client'




export class CreateActivityDto {
  name: string;
description: string;
config: Prisma.InputJsonValue;
}
