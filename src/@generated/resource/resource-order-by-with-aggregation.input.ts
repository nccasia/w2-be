import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ResourceCountOrderByAggregateInput } from './resource-count-order-by-aggregate.input';
import { ResourceAvgOrderByAggregateInput } from './resource-avg-order-by-aggregate.input';
import { ResourceMaxOrderByAggregateInput } from './resource-max-order-by-aggregate.input';
import { ResourceMinOrderByAggregateInput } from './resource-min-order-by-aggregate.input';
import { ResourceSumOrderByAggregateInput } from './resource-sum-order-by-aggregate.input';

@InputType()
export class ResourceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => ResourceCountOrderByAggregateInput, {nullable:true})
    _count?: ResourceCountOrderByAggregateInput;

    @Field(() => ResourceAvgOrderByAggregateInput, {nullable:true})
    _avg?: ResourceAvgOrderByAggregateInput;

    @Field(() => ResourceMaxOrderByAggregateInput, {nullable:true})
    _max?: ResourceMaxOrderByAggregateInput;

    @Field(() => ResourceMinOrderByAggregateInput, {nullable:true})
    _min?: ResourceMinOrderByAggregateInput;

    @Field(() => ResourceSumOrderByAggregateInput, {nullable:true})
    _sum?: ResourceSumOrderByAggregateInput;
}
