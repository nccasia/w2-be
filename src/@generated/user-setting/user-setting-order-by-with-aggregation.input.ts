import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserSettingCountOrderByAggregateInput } from './user-setting-count-order-by-aggregate.input';
import { UserSettingAvgOrderByAggregateInput } from './user-setting-avg-order-by-aggregate.input';
import { UserSettingMaxOrderByAggregateInput } from './user-setting-max-order-by-aggregate.input';
import { UserSettingMinOrderByAggregateInput } from './user-setting-min-order-by-aggregate.input';
import { UserSettingSumOrderByAggregateInput } from './user-setting-sum-order-by-aggregate.input';

@InputType()
export class UserSettingOrderByWithAggregationInput {

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
    userId?: keyof typeof SortOrder;

    @Field(() => UserSettingCountOrderByAggregateInput, {nullable:true})
    _count?: UserSettingCountOrderByAggregateInput;

    @Field(() => UserSettingAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserSettingAvgOrderByAggregateInput;

    @Field(() => UserSettingMaxOrderByAggregateInput, {nullable:true})
    _max?: UserSettingMaxOrderByAggregateInput;

    @Field(() => UserSettingMinOrderByAggregateInput, {nullable:true})
    _min?: UserSettingMinOrderByAggregateInput;

    @Field(() => UserSettingSumOrderByAggregateInput, {nullable:true})
    _sum?: UserSettingSumOrderByAggregateInput;
}
