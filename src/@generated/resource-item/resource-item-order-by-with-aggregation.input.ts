import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ResourceItemCountOrderByAggregateInput } from './resource-item-count-order-by-aggregate.input';
import { ResourceItemAvgOrderByAggregateInput } from './resource-item-avg-order-by-aggregate.input';
import { ResourceItemMaxOrderByAggregateInput } from './resource-item-max-order-by-aggregate.input';
import { ResourceItemMinOrderByAggregateInput } from './resource-item-min-order-by-aggregate.input';
import { ResourceItemSumOrderByAggregateInput } from './resource-item-sum-order-by-aggregate.input';

@InputType()
export class ResourceItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resourceId?: keyof typeof SortOrder;

    @Field(() => ResourceItemCountOrderByAggregateInput, {nullable:true})
    _count?: ResourceItemCountOrderByAggregateInput;

    @Field(() => ResourceItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: ResourceItemAvgOrderByAggregateInput;

    @Field(() => ResourceItemMaxOrderByAggregateInput, {nullable:true})
    _max?: ResourceItemMaxOrderByAggregateInput;

    @Field(() => ResourceItemMinOrderByAggregateInput, {nullable:true})
    _min?: ResourceItemMinOrderByAggregateInput;

    @Field(() => ResourceItemSumOrderByAggregateInput, {nullable:true})
    _sum?: ResourceItemSumOrderByAggregateInput;
}
