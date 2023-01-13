import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerWhereInput } from './trigger-where.input';

@InputType()
export class TriggerListRelationFilter {

    @Field(() => TriggerWhereInput, {nullable:true})
    every?: TriggerWhereInput;

    @Field(() => TriggerWhereInput, {nullable:true})
    some?: TriggerWhereInput;

    @Field(() => TriggerWhereInput, {nullable:true})
    none?: TriggerWhereInput;
}
