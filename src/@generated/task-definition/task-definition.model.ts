import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Form } from '../form/form.model';
import { GraphQLJSON } from 'graphql-type-json';
import { Task } from '../task/task.model';
import { Organization } from '../organization/organization.model';
import { TaskDefinitionActivityDefinition } from '../task-definition-activity-definition/task-definition-activity-definition.model';
import { Project } from '../project/project.model';
import { TaskBoard } from '../task-board/task-board.model';
import { TaskDefinitionCount } from './task-definition-count.output';

@ObjectType()
export class TaskDefinition {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    keyTemplate!: string | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => String, {nullable:false})
    thumbnail!: string;

    @Field(() => Int, {nullable:true})
    formId!: number | null;

    @Field(() => Form, {nullable:true})
    form?: Form | null;

    @Field(() => String, {nullable:true})
    descriptionTemplate!: string | null;

    @Field(() => String, {nullable:true})
    titleTemplate!: string | null;

    @Field(() => String, {nullable:true})
    statusTemplate!: string | null;

    @Field(() => String, {nullable:true})
    stateTemplate!: string | null;

    @Field(() => String, {nullable:true})
    notificationTemplate!: string | null;

    @Field(() => String, {nullable:true})
    ctaTemplate!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    machineConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    contextConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    stateConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    statusConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    notificationConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    processConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    triggerConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    ctaConfig!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    config!: any | null;

    @Field(() => [Task], {nullable:true})
    taskInstances?: Array<Task>;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:true})
    parentId!: number | null;

    @Field(() => TaskDefinition, {nullable:true})
    parentTaskDefinition?: TaskDefinition | null;

    @Field(() => [TaskDefinition], {nullable:true})
    subTaskDefinitions?: Array<TaskDefinition>;

    @Field(() => [TaskDefinitionActivityDefinition], {nullable:true})
    taskDefinitionActivityDefinitions?: Array<TaskDefinitionActivityDefinition>;

    @Field(() => [Project], {nullable:true})
    projects?: Array<Project>;

    @Field(() => [TaskBoard], {nullable:true})
    taskBoards?: Array<TaskBoard>;

    @Field(() => TaskDefinitionCount, {nullable:false})
    _count?: TaskDefinitionCount;
}
