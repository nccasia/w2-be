import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TaskBoardSettingsCountOrderByAggregateInput } from './task-board-settings-count-order-by-aggregate.input';
import { TaskBoardSettingsAvgOrderByAggregateInput } from './task-board-settings-avg-order-by-aggregate.input';
import { TaskBoardSettingsMaxOrderByAggregateInput } from './task-board-settings-max-order-by-aggregate.input';
import { TaskBoardSettingsMinOrderByAggregateInput } from './task-board-settings-min-order-by-aggregate.input';
import { TaskBoardSettingsSumOrderByAggregateInput } from './task-board-settings-sum-order-by-aggregate.input';

@InputType()
export class TaskBoardSettingsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskBoardId?: keyof typeof SortOrder;

    @Field(() => TaskBoardSettingsCountOrderByAggregateInput, {nullable:true})
    _count?: TaskBoardSettingsCountOrderByAggregateInput;

    @Field(() => TaskBoardSettingsAvgOrderByAggregateInput, {nullable:true})
    _avg?: TaskBoardSettingsAvgOrderByAggregateInput;

    @Field(() => TaskBoardSettingsMaxOrderByAggregateInput, {nullable:true})
    _max?: TaskBoardSettingsMaxOrderByAggregateInput;

    @Field(() => TaskBoardSettingsMinOrderByAggregateInput, {nullable:true})
    _min?: TaskBoardSettingsMinOrderByAggregateInput;

    @Field(() => TaskBoardSettingsSumOrderByAggregateInput, {nullable:true})
    _sum?: TaskBoardSettingsSumOrderByAggregateInput;
}
