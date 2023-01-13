import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';
import { ResourceItemListRelationFilter } from '../resource-item/resource-item-list-relation-filter.input';

@InputType()
export class ResourceWhereInput {

    @Field(() => [ResourceWhereInput], {nullable:true})
    AND?: Array<ResourceWhereInput>;

    @Field(() => [ResourceWhereInput], {nullable:true})
    OR?: Array<ResourceWhereInput>;

    @Field(() => [ResourceWhereInput], {nullable:true})
    NOT?: Array<ResourceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    icon?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => ResourceItemListRelationFilter, {nullable:true})
    resourceItems?: ResourceItemListRelationFilter;
}
