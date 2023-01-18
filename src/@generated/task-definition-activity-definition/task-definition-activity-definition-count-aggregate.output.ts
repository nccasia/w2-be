import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskDefinitionActivityDefinitionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    taskDefinitionId!: number;

    @Field(() => Int, {nullable:false})
    activityDefinitionId!: number;

    @Field(() => Int, {nullable:false})
    config!: number;

    @Field(() => Int, {nullable:false})
    initialValue!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
