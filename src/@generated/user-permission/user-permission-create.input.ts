import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutUserPermissionsInput } from '../permission/permission-create-nested-one-without-user-permissions.input';
import { UserCreateNestedOneWithoutUserPermissionsInput } from '../user/user-create-nested-one-without-user-permissions.input';

@InputType()
export class UserPermissionCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PermissionCreateNestedOneWithoutUserPermissionsInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutUserPermissionsInput;

    @Field(() => UserCreateNestedOneWithoutUserPermissionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserPermissionsInput;
}
