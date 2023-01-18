import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumActivityTypeWithAggregatesFilter } from '../prisma/enum-activity-type-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ActivityDefinitionScalarWhereWithAggregatesInput {

    @Field(() => [ActivityDefinitionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ActivityDefinitionScalarWhereWithAggregatesInput>;

    @Field(() => [ActivityDefinitionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ActivityDefinitionScalarWhereWithAggregatesInput>;

    @Field(() => [ActivityDefinitionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ActivityDefinitionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    synchronous?: BoolWithAggregatesFilter;

    @Field(() => EnumActivityTypeWithAggregatesFilter, {nullable:true})
    type?: EnumActivityTypeWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    config?: JsonNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    initialValue?: JsonNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}
