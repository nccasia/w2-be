import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Organization } from '../organization/organization.model';
import { Int } from '@nestjs/graphql';
import { PermissionGroup } from '../permission-group/permission-group.model';
import { UserPermission } from '../user-permission/user-permission.model';
import { PermissionCount } from './permission-count.output';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => PermissionGroup, {nullable:false})
    permissionGroup?: PermissionGroup;

    @Field(() => Int, {nullable:false})
    permissionGroupId!: number;

    @Field(() => [UserPermission], {nullable:true})
    userPermissions?: Array<UserPermission>;

    @Field(() => PermissionCount, {nullable:false})
    _count?: PermissionCount;
}
