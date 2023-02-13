import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PermissionListRelationFilter } from '../permission/permission-list-relation-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';

@InputType()
export class PermissionGroupWhereInput {

    @Field(() => [PermissionGroupWhereInput], {nullable:true})
    AND?: Array<PermissionGroupWhereInput>;

    @Field(() => [PermissionGroupWhereInput], {nullable:true})
    OR?: Array<PermissionGroupWhereInput>;

    @Field(() => [PermissionGroupWhereInput], {nullable:true})
    NOT?: Array<PermissionGroupWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => PermissionListRelationFilter, {nullable:true})
    permissions?: PermissionListRelationFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;
}
