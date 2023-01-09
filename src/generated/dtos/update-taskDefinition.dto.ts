
import {Prisma} from '@prisma/client'




export class UpdateTaskDefinitionDto {
  title?: string;
description?: string;
icon?: string;
thumbnail?: string;
descriptionTemplate?: string;
titleTemplate?: string;
statusTemplate?: string;
stateTemplate?: string;
notificationTemplate?: string;
ctaTemplate?: string;
stageConfig?: Prisma.InputJsonValue;
statusConfig?: Prisma.InputJsonValue;
notificationConfig?: Prisma.InputJsonValue;
processConfig?: Prisma.InputJsonValue;
triggerConfig?: Prisma.InputJsonValue;
ctaConfig?: Prisma.InputJsonValue;
config?: Prisma.InputJsonValue;
}
