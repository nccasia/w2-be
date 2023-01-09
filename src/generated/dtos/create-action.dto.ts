
import {ActionType} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class CreateActionDto {
  @ApiProperty({ enum: ActionType})
type: ActionType;
action: string;
intent: string;
domain: string;
content: string;
}
