import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskBoardType } from '../prisma/task-board-type.enum';
import { TaskBoardViewType } from '../task/task-board-view-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Visibility } from '../prisma/visibility.enum';
import { TaskBoardCountAggregate } from './task-board-count-aggregate.output';
import { TaskBoardAvgAggregate } from './task-board-avg-aggregate.output';
import { TaskBoardSumAggregate } from './task-board-sum-aggregate.output';
import { TaskBoardMinAggregate } from './task-board-min-aggregate.output';
import { TaskBoardMaxAggregate } from './task-board-max-aggregate.output';

@ObjectType()
export class TaskBoardGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => TaskBoardType, {nullable:false})
    type!: keyof typeof TaskBoardType;

    @Field(() => TaskBoardViewType, {nullable:false})
    viewType!: keyof typeof TaskBoardViewType;

    @Field(() => GraphQLJSON, {nullable:false})
    viewConfig!: any;

    @Field(() => Visibility, {nullable:false})
    visibility!: keyof typeof Visibility;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => Int, {nullable:false})
    taskDefinitionId!: number;

    @Field(() => TaskBoardCountAggregate, {nullable:true})
    _count?: TaskBoardCountAggregate;

    @Field(() => TaskBoardAvgAggregate, {nullable:true})
    _avg?: TaskBoardAvgAggregate;

    @Field(() => TaskBoardSumAggregate, {nullable:true})
    _sum?: TaskBoardSumAggregate;

    @Field(() => TaskBoardMinAggregate, {nullable:true})
    _min?: TaskBoardMinAggregate;

    @Field(() => TaskBoardMaxAggregate, {nullable:true})
    _max?: TaskBoardMaxAggregate;
}
