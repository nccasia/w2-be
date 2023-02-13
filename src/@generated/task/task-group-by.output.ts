import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskPriority } from '../prisma/task-priority.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskCountAggregate } from './task-count-aggregate.output';
import { TaskAvgAggregate } from './task-avg-aggregate.output';
import { TaskSumAggregate } from './task-sum-aggregate.output';
import { TaskMinAggregate } from './task-min-aggregate.output';
import { TaskMaxAggregate } from './task-max-aggregate.output';

@ObjectType()
export class TaskGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => TaskPriority, {nullable:false})
    priority!: keyof typeof TaskPriority;

    @Field(() => GraphQLJSON, {nullable:true})
    values?: any;

    @Field(() => String, {nullable:false})
    ctaName!: string;

    @Field(() => String, {nullable:false})
    stateName!: string;

    @Field(() => String, {nullable:false})
    statusName!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:true})
    definitionId?: number;

    @Field(() => Int, {nullable:true})
    assigneeId?: number;

    @Field(() => Int, {nullable:false})
    creatorId!: number;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:true})
    teamId?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => String, {nullable:false})
    cta!: string;

    @Field(() => String, {nullable:true})
    ctaTemplate?: string;

    @Field(() => String, {nullable:true})
    descriptionTemplate?: string;

    @Field(() => String, {nullable:true})
    notificationTemplate?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    properties?: any;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:true})
    stateTemplate?: string;

    @Field(() => String, {nullable:false})
    stateValues!: string;

    @Field(() => String, {nullable:true})
    statusTemplate?: string;

    @Field(() => String, {nullable:true})
    titleTemplate?: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    typeName!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    formConfig?: any;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Int, {nullable:true})
    formId?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => Int, {nullable:true})
    reporterId?: number;

    @Field(() => TaskCountAggregate, {nullable:true})
    _count?: TaskCountAggregate;

    @Field(() => TaskAvgAggregate, {nullable:true})
    _avg?: TaskAvgAggregate;

    @Field(() => TaskSumAggregate, {nullable:true})
    _sum?: TaskSumAggregate;

    @Field(() => TaskMinAggregate, {nullable:true})
    _min?: TaskMinAggregate;

    @Field(() => TaskMaxAggregate, {nullable:true})
    _max?: TaskMaxAggregate;
}
