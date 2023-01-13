import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumTriggerTypeWithAggregatesFilter } from '../prisma/enum-trigger-type-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class TriggerScalarWhereWithAggregatesInput {

    @Field(() => [TriggerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TriggerScalarWhereWithAggregatesInput>;

    @Field(() => [TriggerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TriggerScalarWhereWithAggregatesInput>;

    @Field(() => [TriggerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TriggerScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumTriggerTypeWithAggregatesFilter, {nullable:true})
    type?: EnumTriggerTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    activityId?: IntWithAggregatesFilter;
}
