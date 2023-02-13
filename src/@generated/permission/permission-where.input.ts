import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';
import { PermissionGroupRelationFilter } from '../permission-group/permission-group-relation-filter.input';
import { UserPermissionListRelationFilter } from '../user-permission/user-permission-list-relation-filter.input';

@InputType()
export class PermissionWhereInput {

    @Field(() => [PermissionWhereInput], {nullable:true})
    AND?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    OR?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    NOT?: Array<PermissionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    permissionGroupId?: IntFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => PermissionGroupRelationFilter, {nullable:true})
    permissionGroup?: PermissionGroupRelationFilter;

    @Field(() => UserPermissionListRelationFilter, {nullable:true})
    userPermissions?: UserPermissionListRelationFilter;
}
