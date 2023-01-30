import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardSettingsWhereInput } from '../task-board-settings/task-board-settings-where.input';
import { Type } from 'class-transformer';
import { TaskBoardSettingsOrderByWithRelationInput } from '../task-board-settings/task-board-settings-order-by-with-relation.input';
import { TaskBoardSettingsWhereUniqueInput } from '../task-board-settings/task-board-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TaskBoardSettingsCountAggregateInput } from '../task-board-settings/task-board-settings-count-aggregate.input';
import { TaskBoardSettingsAvgAggregateInput } from '../task-board-settings/task-board-settings-avg-aggregate.input';
import { TaskBoardSettingsSumAggregateInput } from '../task-board-settings/task-board-settings-sum-aggregate.input';
import { TaskBoardSettingsMinAggregateInput } from '../task-board-settings/task-board-settings-min-aggregate.input';
import { TaskBoardSettingsMaxAggregateInput } from '../task-board-settings/task-board-settings-max-aggregate.input';

@ArgsType()
export class TaskBoardSettingsAggregateArgs {

    @Field(() => TaskBoardSettingsWhereInput, {nullable:true})
    @Type(() => TaskBoardSettingsWhereInput)
    where?: TaskBoardSettingsWhereInput;

    @Field(() => [TaskBoardSettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TaskBoardSettingsOrderByWithRelationInput>;

    @Field(() => TaskBoardSettingsWhereUniqueInput, {nullable:true})
    cursor?: TaskBoardSettingsWhereUniqueInput;

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
