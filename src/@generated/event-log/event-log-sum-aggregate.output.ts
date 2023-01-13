import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventLogSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    taskId?: number;

    @Field(() => Int, {nullable:true})
    actionId?: number;

    @Field(() => Int, {nullable:true})
    organizationId?: number;
}
