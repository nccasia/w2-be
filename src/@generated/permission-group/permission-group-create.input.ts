import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateNestedOneWithoutPermissionGroupsInput } from '../organization/organization-create-nested-one-without-permission-groups.input';
import { PermissionCreateNestedManyWithoutPermissionGroupInput } from '../permission/permission-create-nested-many-without-permission-group.input';

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

    @Field(() => OrganizationCreateNestedOneWithoutPermissionGroupsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutPermissionGroupsInput;

    @Field(() => PermissionCreateNestedManyWithoutPermissionGroupInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutPermissionGroupInput;
}
