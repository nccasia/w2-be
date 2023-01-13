import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupCreateWithoutPermissionsInput } from './permission-group-create-without-permissions.input';
import { Type } from 'class-transformer';
import { PermissionGroupCreateOrConnectWithoutPermissionsInput } from './permission-group-create-or-connect-without-permissions.input';
import { PermissionGroupUpsertWithoutPermissionsInput } from './permission-group-upsert-without-permissions.input';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';
import { PermissionGroupUpdateWithoutPermissionsInput } from './permission-group-update-without-permissions.input';

@InputType()
export class PermissionGroupUpdateOneRequiredWithoutPermissionsNestedInput {

    @Field(() => PermissionGroupCreateWithoutPermissionsInput, {nullable:true})
    @Type(() => PermissionGroupCreateWithoutPermissionsInput)
    create?: PermissionGroupCreateWithoutPermissionsInput;

    @Field(() => PermissionGroupCreateOrConnectWithoutPermissionsInput, {nullable:true})
    @Type(() => PermissionGroupCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: PermissionGroupCreateOrConnectWithoutPermissionsInput;

    @Field(() => PermissionGroupUpsertWithoutPermissionsInput, {nullable:true})
    @Type(() => PermissionGroupUpsertWithoutPermissionsInput)
    upsert?: PermissionGroupUpsertWithoutPermissionsInput;

    @Field(() => PermissionGroupWhereUniqueInput, {nullable:true})
    @Type(() => PermissionGroupWhereUniqueInput)
    connect?: PermissionGroupWhereUniqueInput;

    @Field(() => PermissionGroupUpdateWithoutPermissionsInput, {nullable:true})
    @Type(() => PermissionGroupUpdateWithoutPermissionsInput)
    update?: PermissionGroupUpdateWithoutPermissionsInput;
}
