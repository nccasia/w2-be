
import {Prisma} from '@prisma/client'




export class UpdateFormDto {
  name?: string;
code?: string;
description?: string;
schema?: Prisma.InputJsonValue;
config?: Prisma.InputJsonValue;
validationConfig?: Prisma.InputJsonValue;
triggerConfig?: Prisma.InputJsonValue;
serializerConfig?: Prisma.InputJsonValue;
displayTemplate?: string;
displayConfig?: Prisma.InputJsonValue;
}
