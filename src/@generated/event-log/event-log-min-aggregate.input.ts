import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventLogMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    taskId?: true;

    @Field(() => Boolean, {nullable:true})
    organizationId?: true;

    @Field(() => Boolean, {nullable:true})
    action?: true;

    @Field(() => Boolean, {nullable:true})
    intent?: true;

    @Field(() => Boolean, {nullable:true})
    domain?: true;

    @Field(() => Boolean, {nullable:true})
    content?: true;
}
