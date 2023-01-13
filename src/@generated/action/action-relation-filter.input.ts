import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActionWhereInput } from './action-where.input';

@InputType()
export class ActionRelationFilter {

    @Field(() => ActionWhereInput, {nullable:true})
    is?: ActionWhereInput;

    @Field(() => ActionWhereInput, {nullable:true})
    isNot?: ActionWhereInput;
}
