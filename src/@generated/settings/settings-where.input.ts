import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';

@InputType()
export class SettingsWhereInput {

    @Field(() => [SettingsWhereInput], {nullable:true})
    AND?: Array<SettingsWhereInput>;

    @Field(() => [SettingsWhereInput], {nullable:true})
    OR?: Array<SettingsWhereInput>;

    @Field(() => [SettingsWhereInput], {nullable:true})
    NOT?: Array<SettingsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => JsonFilter, {nullable:true})
    value?: JsonFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;
}
