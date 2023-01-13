import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserPermissionsInput } from '../user/user-create-nested-one-without-user-permissions.input';
import { PermissionCreateNestedOneWithoutUserPermissionsInput } from '../permission/permission-create-nested-one-without-user-permissions.input';

@InputType()
export class UserPermissionCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUserPermissionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserPermissionsInput;

    @Field(() => PermissionCreateNestedOneWithoutUserPermissionsInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutUserPermissionsInput;
}
