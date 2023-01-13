import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActivityCountOrderByAggregateInput } from './activity-count-order-by-aggregate.input';
import { ActivityAvgOrderByAggregateInput } from './activity-avg-order-by-aggregate.input';
import { ActivityMaxOrderByAggregateInput } from './activity-max-order-by-aggregate.input';
import { ActivityMinOrderByAggregateInput } from './activity-min-order-by-aggregate.input';
import { ActivitySumOrderByAggregateInput } from './activity-sum-order-by-aggregate.input';

@InputType()
export class ActivityOrderByWithAggregationInput {

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
    config?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workflowId?: keyof typeof SortOrder;

    @Field(() => ActivityCountOrderByAggregateInput, {nullable:true})
    _count?: ActivityCountOrderByAggregateInput;

    @Field(() => ActivityAvgOrderByAggregateInput, {nullable:true})
    _avg?: ActivityAvgOrderByAggregateInput;

    @Field(() => ActivityMaxOrderByAggregateInput, {nullable:true})
    _max?: ActivityMaxOrderByAggregateInput;

    @Field(() => ActivityMinOrderByAggregateInput, {nullable:true})
    _min?: ActivityMinOrderByAggregateInput;

    @Field(() => ActivitySumOrderByAggregateInput, {nullable:true})
    _sum?: ActivitySumOrderByAggregateInput;
}
