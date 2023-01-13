import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateWithoutUserPermissionsInput } from './permission-update-without-user-permissions.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutUserPermissionsInput } from './permission-create-without-user-permissions.input';

@InputType()
export class PermissionUpsertWithoutUserPermissionsInput {

    @Field(() => PermissionUpdateWithoutUserPermissionsInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutUserPermissionsInput)
    update!: PermissionUpdateWithoutUserPermissionsInput;

    @Field(() => PermissionCreateWithoutUserPermissionsInput, {nullable:false})
    @Type(() => PermissionCreateWithoutUserPermissionsInput)
    create!: PermissionCreateWithoutUserPermissionsInput;
}
