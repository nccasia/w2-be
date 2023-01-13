import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { Workflow } from '../workflow/workflow.model';
import { TaskDefinition } from '../task-definition/task-definition.model';
import { Trigger } from '../trigger/trigger.model';
import { ActivityCount } from './activity-count.output';

@ObjectType()
export class Activity {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    config!: any;

    @Field(() => Int, {nullable:false})
    workflowId!: number;

    @Field(() => Workflow, {nullable:false})
    workflow?: Workflow;

    @Field(() => [TaskDefinition], {nullable:true})
    taskDefinitions?: Array<TaskDefinition>;

    @Field(() => [Trigger], {nullable:true})
    triggers?: Array<Trigger>;

    @Field(() => ActivityCount, {nullable:false})
    _count?: ActivityCount;
}
