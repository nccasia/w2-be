import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TaskBoardCountOrderByAggregateInput } from './task-board-count-order-by-aggregate.input';
import { TaskBoardAvgOrderByAggregateInput } from './task-board-avg-order-by-aggregate.input';
import { TaskBoardMaxOrderByAggregateInput } from './task-board-max-order-by-aggregate.input';
import { TaskBoardMinOrderByAggregateInput } from './task-board-min-order-by-aggregate.input';
import { TaskBoardSumOrderByAggregateInput } from './task-board-sum-order-by-aggregate.input';

@InputType()
export class TaskBoardOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    viewType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    viewConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskDefinitionId?: keyof typeof SortOrder;

    @Field(() => TaskBoardCountOrderByAggregateInput, {nullable:true})
    _count?: TaskBoardCountOrderByAggregateInput;

    @Field(() => TaskBoardAvgOrderByAggregateInput, {nullable:true})
    _avg?: TaskBoardAvgOrderByAggregateInput;

    @Field(() => TaskBoardMaxOrderByAggregateInput, {nullable:true})
    _max?: TaskBoardMaxOrderByAggregateInput;

    @Field(() => TaskBoardMinOrderByAggregateInput, {nullable:true})
    _min?: TaskBoardMinOrderByAggregateInput;

    @Field(() => TaskBoardSumOrderByAggregateInput, {nullable:true})
    _sum?: TaskBoardSumOrderByAggregateInput;
}
