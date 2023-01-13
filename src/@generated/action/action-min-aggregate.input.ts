import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ActionMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    action?: true;

    @Field(() => Boolean, {nullable:true})
    intent?: true;

    @Field(() => Boolean, {nullable:true})
    domain?: true;

    @Field(() => Boolean, {nullable:true})
    content?: true;
}
