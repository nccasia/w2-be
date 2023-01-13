import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupCreateWithoutPermissionsInput } from './permission-group-create-without-permissions.input';
import { Type } from 'class-transformer';
import { PermissionGroupCreateOrConnectWithoutPermissionsInput } from './permission-group-create-or-connect-without-permissions.input';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';

@InputType()
export class PermissionGroupCreateNestedOneWithoutPermissionsInput {

    @Field(() => PermissionGroupCreateWithoutPermissionsInput, {nullable:true})
    @Type(() => PermissionGroupCreateWithoutPermissionsInput)
    create?: PermissionGroupCreateWithoutPermissionsInput;

    @Field(() => PermissionGroupCreateOrConnectWithoutPermissionsInput, {nullable:true})
    @Type(() => PermissionGroupCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: PermissionGroupCreateOrConnectWithoutPermissionsInput;

    @Field(() => PermissionGroupWhereUniqueInput, {nullable:true})
    @Type(() => PermissionGroupWhereUniqueInput)
    connect?: PermissionGroupWhereUniqueInput;
}
