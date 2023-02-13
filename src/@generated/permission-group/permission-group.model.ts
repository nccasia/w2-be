import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Permission } from '../permission/permission.model';
import { Organization } from '../organization/organization.model';
import { PermissionGroupCount } from './permission-group-count.output';

@ObjectType()
export class PermissionGroup {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => [Permission], {nullable:true})
    permissions?: Array<Permission>;

    @Field(() => Organization, {nullable:false})
    organization?: Organization;

    @Field(() => PermissionGroupCount, {nullable:false})
    _count?: PermissionGroupCount;
}
