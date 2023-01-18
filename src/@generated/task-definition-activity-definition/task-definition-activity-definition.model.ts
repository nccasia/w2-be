import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskDefinition } from '../task-definition/task-definition.model';
import { ActivityDefinition } from '../activity-definition/activity-definition.model';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class TaskDefinitionActivityDefinition {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    taskDefinitionId!: number;

    @Field(() => TaskDefinition, {nullable:false})
    taskDefinition?: TaskDefinition;

    @Field(() => Int, {nullable:false})
    activityDefinitionId!: number;

    @Field(() => ActivityDefinition, {nullable:false})
    activityDefinition?: ActivityDefinition;

    @Field(() => GraphQLJSON, {nullable:true})
    config!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    initialValue!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
