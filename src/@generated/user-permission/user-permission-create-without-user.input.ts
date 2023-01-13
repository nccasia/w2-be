import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutUserPermissionsInput } from '../permission/permission-create-nested-one-without-user-permissions.input';

@InputType()
export class UserPermissionCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PermissionCreateNestedOneWithoutUserPermissionsInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutUserPermissionsInput;
}
