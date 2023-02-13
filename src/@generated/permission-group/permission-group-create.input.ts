import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedManyWithoutPermissionGroupInput } from '../permission/permission-create-nested-many-without-permission-group.input';
import { OrganizationCreateNestedOneWithoutPermissionGroupsInput } from '../organization/organization-create-nested-one-without-permission-groups.input';

@InputType()
export class PermissionGroupCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PermissionCreateNestedManyWithoutPermissionGroupInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutPermissionGroupInput;

    @Field(() => OrganizationCreateNestedOneWithoutPermissionGroupsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutPermissionGroupsInput;
}
