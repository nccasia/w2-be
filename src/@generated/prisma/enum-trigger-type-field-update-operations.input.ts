import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerType } from './trigger-type.enum';

@InputType()
export class EnumTriggerTypeFieldUpdateOperationsInput {

    @Field(() => TriggerType, {nullable:true})
    set?: keyof typeof TriggerType;
}
