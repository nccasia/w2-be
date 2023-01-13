import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionGroupCountOrderByAggregateInput } from './permission-group-count-order-by-aggregate.input';
import { PermissionGroupAvgOrderByAggregateInput } from './permission-group-avg-order-by-aggregate.input';
import { PermissionGroupMaxOrderByAggregateInput } from './permission-group-max-order-by-aggregate.input';
import { PermissionGroupMinOrderByAggregateInput } from './permission-group-min-order-by-aggregate.input';
import { PermissionGroupSumOrderByAggregateInput } from './permission-group-sum-order-by-aggregate.input';

@InputType()
export class PermissionGroupOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => PermissionGroupCountOrderByAggregateInput, {nullable:true})
    _count?: PermissionGroupCountOrderByAggregateInput;

    @Field(() => PermissionGroupAvgOrderByAggregateInput, {nullable:true})
    _avg?: PermissionGroupAvgOrderByAggregateInput;

    @Field(() => PermissionGroupMaxOrderByAggregateInput, {nullable:true})
    _max?: PermissionGroupMaxOrderByAggregateInput;

    @Field(() => PermissionGroupMinOrderByAggregateInput, {nullable:true})
    _min?: PermissionGroupMinOrderByAggregateInput;

    @Field(() => PermissionGroupSumOrderByAggregateInput, {nullable:true})
    _sum?: PermissionGroupSumOrderByAggregateInput;
}
