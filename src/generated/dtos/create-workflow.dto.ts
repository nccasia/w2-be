
import {Prisma} from '@prisma/client'




export class CreateWorkflowDto {
  name: string;
description: string;
config: Prisma.InputJsonValue;
}
