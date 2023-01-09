
import {Prisma,TriggerType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class CreateTriggerDto {
  @ApiProperty({ enum: TriggerType})
type: TriggerType;
name: string;
description: string;
config: Prisma.InputJsonValue;
}
