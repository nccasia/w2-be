import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';

@InputType()
export class SettingsScalarWhereWithAggregatesInput {

    @Field(() => [SettingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SettingsScalarWhereWithAggregatesInput>;

    @Field(() => [SettingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SettingsScalarWhereWithAggregatesInput>;

    @Field(() => [SettingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SettingsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    organizationId?: IntWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    value?: JsonWithAggregatesFilter;
}
