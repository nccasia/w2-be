import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventLogOrderByRelationAggregateInput } from '../event-log/event-log-order-by-relation-aggregate.input';

@InputType()
export class ActionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => EventLogOrderByRelationAggregateInput, {nullable:true})
    events?: EventLogOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    intent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domain?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
}
