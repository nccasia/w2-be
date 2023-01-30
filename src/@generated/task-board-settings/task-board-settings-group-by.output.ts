import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskBoardSettingsCountAggregate } from './task-board-settings-count-aggregate.output';
import { TaskBoardSettingsAvgAggregate } from './task-board-settings-avg-aggregate.output';
import { TaskBoardSettingsSumAggregate } from './task-board-settings-sum-aggregate.output';
import { TaskBoardSettingsMinAggregate } from './task-board-settings-min-aggregate.output';
import { TaskBoardSettingsMaxAggregate } from './task-board-settings-max-aggregate.output';

@ObjectType()
export class TaskBoardSettingsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    value!: any;

    @Field(() => Int, {nullable:false})
    taskBoardId!: number;

    @Field(() => TaskBoardSettingsCountAggregate, {nullable:true})
    _count?: TaskBoardSettingsCountAggregate;

    @Field(() => TaskBoardSettingsAvgAggregate, {nullable:true})
    _avg?: TaskBoardSettingsAvgAggregate;

    @Field(() => TaskBoardSettingsSumAggregate, {nullable:true})
    _sum?: TaskBoardSettingsSumAggregate;

    @Field(() => TaskBoardSettingsMinAggregate, {nullable:true})
    _min?: TaskBoardSettingsMinAggregate;

    @Field(() => TaskBoardSettingsMaxAggregate, {nullable:true})
    _max?: TaskBoardSettingsMaxAggregate;
}
