import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TriggerCountOrderByAggregateInput } from './trigger-count-order-by-aggregate.input';
import { TriggerAvgOrderByAggregateInput } from './trigger-avg-order-by-aggregate.input';
import { TriggerMaxOrderByAggregateInput } from './trigger-max-order-by-aggregate.input';
import { TriggerMinOrderByAggregateInput } from './trigger-min-order-by-aggregate.input';
import { TriggerSumOrderByAggregateInput } from './trigger-sum-order-by-aggregate.input';

@InputType()
export class TriggerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => TriggerCountOrderByAggregateInput, {nullable:true})
    _count?: TriggerCountOrderByAggregateInput;

    @Field(() => TriggerAvgOrderByAggregateInput, {nullable:true})
    _avg?: TriggerAvgOrderByAggregateInput;

    @Field(() => TriggerMaxOrderByAggregateInput, {nullable:true})
    _max?: TriggerMaxOrderByAggregateInput;

    @Field(() => TriggerMinOrderByAggregateInput, {nullable:true})
    _min?: TriggerMinOrderByAggregateInput;

    @Field(() => TriggerSumOrderByAggregateInput, {nullable:true})
    _sum?: TriggerSumOrderByAggregateInput;
}
