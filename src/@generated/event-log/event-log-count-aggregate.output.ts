import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventLogCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:false})
    content!: number;

    @Field(() => Int, {nullable:false})
    context!: number;

    @Field(() => Int, {nullable:false})
    action!: number;

    @Field(() => Int, {nullable:false})
    domain!: number;

    @Field(() => Int, {nullable:false})
    intent!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
