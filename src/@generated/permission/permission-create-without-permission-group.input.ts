import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateNestedOneWithoutPermissionsInput } from '../organization/organization-create-nested-one-without-permissions.input';
import { UserPermissionCreateNestedManyWithoutPermissionInput } from '../user-permission/user-permission-create-nested-many-without-permission.input';

@InputType()
export class PermissionCreateWithoutPermissionGroupInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrganizationCreateNestedOneWithoutPermissionsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutPermissionsInput;

    @Field(() => UserPermissionCreateNestedManyWithoutPermissionInput, {nullable:true})
    userPermissions?: UserPermissionCreateNestedManyWithoutPermissionInput;
}
