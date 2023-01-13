import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupCreateNestedOneWithoutPermissionsInput } from '../permission-group/permission-group-create-nested-one-without-permissions.input';
import { UserPermissionCreateNestedManyWithoutPermissionInput } from '../user-permission/user-permission-create-nested-many-without-permission.input';

@InputType()
export class PermissionCreateWithoutOrganizationInput {

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

    @Field(() => PermissionGroupCreateNestedOneWithoutPermissionsInput, {nullable:false})
    permissionGroup!: PermissionGroupCreateNestedOneWithoutPermissionsInput;

    @Field(() => UserPermissionCreateNestedManyWithoutPermissionInput, {nullable:true})
    userPermissions?: UserPermissionCreateNestedManyWithoutPermissionInput;
}
