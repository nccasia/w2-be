import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardSettingsWhereInput } from './task-board-settings-where.input';
import { Type } from 'class-transformer';
import { TaskBoardSettingsOrderByWithAggregationInput } from './task-board-settings-order-by-with-aggregation.input';
import { TaskBoardSettingsScalarFieldEnum } from './task-board-settings-scalar-field.enum';
import { TaskBoardSettingsScalarWhereWithAggregatesInput } from './task-board-settings-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TaskBoardSettingsCountAggregateInput } from './task-board-settings-count-aggregate.input';
import { TaskBoardSettingsAvgAggregateInput } from './task-board-settings-avg-aggregate.input';
import { TaskBoardSettingsSumAggregateInput } from './task-board-settings-sum-aggregate.input';
import { TaskBoardSettingsMinAggregateInput } from './task-board-settings-min-aggregate.input';
import { TaskBoardSettingsMaxAggregateInput } from './task-board-settings-max-aggregate.input';

@ArgsType()
export class TaskBoardSettingsGroupByArgs {

    @Field(() => TaskBoardSettingsWhereInput, {nullable:true})
    @Type(() => TaskBoardSettingsWhereInput)
    where?: TaskBoardSettingsWhereInput;

    @Field(() => [TaskBoardSettingsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TaskBoardSettingsOrderByWithAggregationInput>;

    @Field(() => [TaskBoardSettingsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TaskBoardSettingsScalarFieldEnum>;

    @Field(() => TaskBoardSettingsScalarWhereWithAggregatesInput, {nullable:true})
    having?: TaskBoardSettingsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TaskBoardSettingsCountAggregateInput, {nullable:true})
    _count?: TaskBoardSettingsCountAggregateInput;

    @Field(() => TaskBoardSettingsAvgAggregateInput, {nullable:true})
    _avg?: TaskBoardSettingsAvgAggregateInput;

    @Field(() => TaskBoardSettingsSumAggregateInput, {nullable:true})
    _sum?: TaskBoardSettingsSumAggregateInput;

    @Field(() => TaskBoardSettingsMinAggregateInput, {nullable:true})
    _min?: TaskBoardSettingsMinAggregateInput;

    @Field(() => TaskBoardSettingsMaxAggregateInput, {nullable:true})
    _max?: TaskBoardSettingsMaxAggregateInput;
}
