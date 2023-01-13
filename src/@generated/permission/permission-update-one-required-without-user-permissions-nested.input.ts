import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutUserPermissionsInput } from './permission-create-without-user-permissions.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutUserPermissionsInput } from './permission-create-or-connect-without-user-permissions.input';
import { PermissionUpsertWithoutUserPermissionsInput } from './permission-upsert-without-user-permissions.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithoutUserPermissionsInput } from './permission-update-without-user-permissions.input';

@InputType()
export class PermissionUpdateOneRequiredWithoutUserPermissionsNestedInput {

    @Field(() => PermissionCreateWithoutUserPermissionsInput, {nullable:true})
    @Type(() => PermissionCreateWithoutUserPermissionsInput)
    create?: PermissionCreateWithoutUserPermissionsInput;

    @Field(() => PermissionCreateOrConnectWithoutUserPermissionsInput, {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutUserPermissionsInput)
    connectOrCreate?: PermissionCreateOrConnectWithoutUserPermissionsInput;

    @Field(() => PermissionUpsertWithoutUserPermissionsInput, {nullable:true})
    @Type(() => PermissionUpsertWithoutUserPermissionsInput)
    upsert?: PermissionUpsertWithoutUserPermissionsInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutUserPermissionsInput, {nullable:true})
    @Type(() => PermissionUpdateWithoutUserPermissionsInput)
    update?: PermissionUpdateWithoutUserPermissionsInput;
}
