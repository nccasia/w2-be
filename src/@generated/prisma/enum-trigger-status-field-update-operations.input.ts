import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerStatus } from './trigger-status.enum';

@InputType()
export class EnumTriggerStatusFieldUpdateOperationsInput {

    @Field(() => TriggerStatus, {nullable:true})
    set?: keyof typeof TriggerStatus;
}
