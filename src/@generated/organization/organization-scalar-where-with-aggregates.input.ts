import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OrganizationScalarWhereWithAggregatesInput {

    @Field(() => [OrganizationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrganizationScalarWhereWithAggregatesInput>;

    @Field(() => [OrganizationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrganizationScalarWhereWithAggregatesInput>;

    @Field(() => [OrganizationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrganizationScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
