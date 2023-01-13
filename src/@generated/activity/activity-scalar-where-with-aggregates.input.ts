import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';

@InputType()
export class ActivityScalarWhereWithAggregatesInput {

    @Field(() => [ActivityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ActivityScalarWhereWithAggregatesInput>;

    @Field(() => [ActivityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ActivityScalarWhereWithAggregatesInput>;

    @Field(() => [ActivityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ActivityScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    config?: JsonWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    workflowId?: IntWithAggregatesFilter;
}
