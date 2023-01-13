import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionGroupCreateWithoutPermissionsInput } from './permission-group-create-without-permissions.input';

@InputType()
export class PermissionGroupCreateOrConnectWithoutPermissionsInput {

    @Field(() => PermissionGroupWhereUniqueInput, {nullable:false})
    @Type(() => PermissionGroupWhereUniqueInput)
    where!: PermissionGroupWhereUniqueInput;

    @Field(() => PermissionGroupCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => PermissionGroupCreateWithoutPermissionsInput)
    create!: PermissionGroupCreateWithoutPermissionsInput;
}
