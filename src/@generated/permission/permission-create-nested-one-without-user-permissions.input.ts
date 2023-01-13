import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutUserPermissionsInput } from './permission-create-without-user-permissions.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutUserPermissionsInput } from './permission-create-or-connect-without-user-permissions.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionCreateNestedOneWithoutUserPermissionsInput {

    @Field(() => PermissionCreateWithoutUserPermissionsInput, {nullable:true})
    @Type(() => PermissionCreateWithoutUserPermissionsInput)
    create?: PermissionCreateWithoutUserPermissionsInput;

    @Field(() => PermissionCreateOrConnectWithoutUserPermissionsInput, {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutUserPermissionsInput)
    connectOrCreate?: PermissionCreateOrConnectWithoutUserPermissionsInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: PermissionWhereUniqueInput;
}
