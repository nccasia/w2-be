import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActionCountOrderByAggregateInput } from './action-count-order-by-aggregate.input';
import { ActionAvgOrderByAggregateInput } from './action-avg-order-by-aggregate.input';
import { ActionMaxOrderByAggregateInput } from './action-max-order-by-aggregate.input';
import { ActionMinOrderByAggregateInput } from './action-min-order-by-aggregate.input';
import { ActionSumOrderByAggregateInput } from './action-sum-order-by-aggregate.input';

@InputType()
export class ActionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    intent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domain?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => ActionCountOrderByAggregateInput, {nullable:true})
    _count?: ActionCountOrderByAggregateInput;

    @Field(() => ActionAvgOrderByAggregateInput, {nullable:true})
    _avg?: ActionAvgOrderByAggregateInput;

    @Field(() => ActionMaxOrderByAggregateInput, {nullable:true})
    _max?: ActionMaxOrderByAggregateInput;

    @Field(() => ActionMinOrderByAggregateInput, {nullable:true})
    _min?: ActionMinOrderByAggregateInput;

    @Field(() => ActionSumOrderByAggregateInput, {nullable:true})
    _sum?: ActionSumOrderByAggregateInput;
}
