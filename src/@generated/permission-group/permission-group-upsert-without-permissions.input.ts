import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupUpdateWithoutPermissionsInput } from './permission-group-update-without-permissions.input';
import { Type } from 'class-transformer';
import { PermissionGroupCreateWithoutPermissionsInput } from './permission-group-create-without-permissions.input';

@InputType()
export class PermissionGroupUpsertWithoutPermissionsInput {

    @Field(() => PermissionGroupUpdateWithoutPermissionsInput, {nullable:false})
    @Type(() => PermissionGroupUpdateWithoutPermissionsInput)
    update!: PermissionGroupUpdateWithoutPermissionsInput;

    @Field(() => PermissionGroupCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => PermissionGroupCreateWithoutPermissionsInput)
    create!: PermissionGroupCreateWithoutPermissionsInput;
}
