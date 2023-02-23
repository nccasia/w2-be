import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Project } from '../project/project.model';
import { Task } from '../task/task.model';
import { TaskBoard } from '../task-board/task-board.model';
import { Form } from '../form/form.model';
import { Organization } from '../organization/organization.model';
import { TaskDefinitionCount } from './task-definition-count.output';

@ObjectType()
export class TaskDefinition {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => String, {nullable:false})
    thumbnail!: string;

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

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:true})
    parentId!: number | null;

    @Field(() => Int, {nullable:true})
    formId!: number | null;

    @Field(() => String, {nullable:true})
    keyTemplate!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    machineConfig!: any | null;

    @Field(() => [Project], {nullable:true})
    projects?: Array<Project>;

    @Field(() => [Task], {nullable:true})
    taskInstances?: Array<Task>;

    @Field(() => [TaskBoard], {nullable:true})
    taskBoards?: Array<TaskBoard>;

    @Field(() => Form, {nullable:true})
    form?: Form | null;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => TaskDefinition, {nullable:true})
    parentTaskDefinition?: TaskDefinition | null;

    @Field(() => [TaskDefinition], {nullable:true})
    subTaskDefinitions?: Array<TaskDefinition>;

    @Field(() => TaskDefinitionCount, {nullable:false})
    _count?: TaskDefinitionCount;
}
