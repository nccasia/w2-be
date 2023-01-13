import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserPermissionCountOrderByAggregateInput } from './user-permission-count-order-by-aggregate.input';
import { UserPermissionAvgOrderByAggregateInput } from './user-permission-avg-order-by-aggregate.input';
import { UserPermissionMaxOrderByAggregateInput } from './user-permission-max-order-by-aggregate.input';
import { UserPermissionMinOrderByAggregateInput } from './user-permission-min-order-by-aggregate.input';
import { UserPermissionSumOrderByAggregateInput } from './user-permission-sum-order-by-aggregate.input';

@InputType()
export class UserPermissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;

    @Field(() => UserPermissionCountOrderByAggregateInput, {nullable:true})
    _count?: UserPermissionCountOrderByAggregateInput;

    @Field(() => UserPermissionAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserPermissionAvgOrderByAggregateInput;

    @Field(() => UserPermissionMaxOrderByAggregateInput, {nullable:true})
    _max?: UserPermissionMaxOrderByAggregateInput;

    @Field(() => UserPermissionMinOrderByAggregateInput, {nullable:true})
    _min?: UserPermissionMinOrderByAggregateInput;

    @Field(() => UserPermissionSumOrderByAggregateInput, {nullable:true})
    _sum?: UserPermissionSumOrderByAggregateInput;
}
