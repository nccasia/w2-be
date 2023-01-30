import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskDefinitionCount {

    @Field(() => Int, {nullable:false})
    taskInstances?: number;

    @Field(() => Int, {nullable:false})
    subTaskDefinitions?: number;

    @Field(() => Int, {nullable:false})
    taskDefinitionActivityDefinitions?: number;

    @Field(() => Int, {nullable:false})
    projects?: number;

    @Field(() => Int, {nullable:false})
    taskBoards?: number;
}
