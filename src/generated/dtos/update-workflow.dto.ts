
import {Prisma} from '@prisma/client'




export class UpdateWorkflowDto {
  name?: string;
description?: string;
config?: Prisma.InputJsonValue;
}
