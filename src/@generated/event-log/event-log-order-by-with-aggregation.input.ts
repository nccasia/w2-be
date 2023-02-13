import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventLogCountOrderByAggregateInput } from './event-log-count-order-by-aggregate.input';
import { EventLogAvgOrderByAggregateInput } from './event-log-avg-order-by-aggregate.input';
import { EventLogMaxOrderByAggregateInput } from './event-log-max-order-by-aggregate.input';
import { EventLogMinOrderByAggregateInput } from './event-log-min-order-by-aggregate.input';
import { EventLogSumOrderByAggregateInput } from './event-log-sum-order-by-aggregate.input';

@InputType()
export class EventLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    context?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domain?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    intent?: keyof typeof SortOrder;

    @Field(() => EventLogCountOrderByAggregateInput, {nullable:true})
    _count?: EventLogCountOrderByAggregateInput;

    @Field(() => EventLogAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventLogAvgOrderByAggregateInput;

    @Field(() => EventLogMaxOrderByAggregateInput, {nullable:true})
    _max?: EventLogMaxOrderByAggregateInput;

    @Field(() => EventLogMinOrderByAggregateInput, {nullable:true})
    _min?: EventLogMinOrderByAggregateInput;

    @Field(() => EventLogSumOrderByAggregateInput, {nullable:true})
    _sum?: EventLogSumOrderByAggregateInput;
}
