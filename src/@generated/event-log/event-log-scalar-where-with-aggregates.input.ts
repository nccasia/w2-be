import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class EventLogScalarWhereWithAggregatesInput {

    @Field(() => [EventLogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EventLogScalarWhereWithAggregatesInput>;

    @Field(() => [EventLogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EventLogScalarWhereWithAggregatesInput>;

    @Field(() => [EventLogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EventLogScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    taskId?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    actionId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    organizationId?: IntWithAggregatesFilter;
}
