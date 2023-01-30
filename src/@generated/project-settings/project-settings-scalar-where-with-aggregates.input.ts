import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';

@InputType()
export class ProjectSettingsScalarWhereWithAggregatesInput {

    @Field(() => [ProjectSettingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProjectSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectSettingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProjectSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [ProjectSettingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProjectSettingsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    value?: JsonWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: IntWithAggregatesFilter;
}
