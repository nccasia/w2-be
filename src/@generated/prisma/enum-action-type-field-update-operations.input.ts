import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActionType } from './action-type.enum';

@InputType()
export class EnumActionTypeFieldUpdateOperationsInput {

    @Field(() => ActionType, {nullable:true})
    set?: keyof typeof ActionType;
}
