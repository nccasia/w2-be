import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumTriggerTypeWithAggregatesFilter } from '../prisma/enum-trigger-type-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumTriggerStatusWithAggregatesFilter } from '../prisma/enum-trigger-status-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';

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

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: StringWithAggregatesFilter;

    @Field(() => EnumTriggerStatusWithAggregatesFilter, {nullable:true})
    status?: EnumTriggerStatusWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    taskId?: IntNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    value?: JsonNullableWithAggregatesFilter;
}
