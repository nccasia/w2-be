import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FormScalarWhereWithAggregatesInput {

    @Field(() => [FormScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FormScalarWhereWithAggregatesInput>;

    @Field(() => [FormScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FormScalarWhereWithAggregatesInput>;

    @Field(() => [FormScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FormScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    schema?: JsonWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    config?: JsonWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    validationConfig?: JsonWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    triggerConfig?: JsonWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    serializerConfig?: JsonWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    displayTemplate?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    displayConfig?: JsonWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    values?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
