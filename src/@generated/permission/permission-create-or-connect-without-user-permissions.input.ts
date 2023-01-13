import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutUserPermissionsInput } from './permission-create-without-user-permissions.input';

@InputType()
export class PermissionCreateOrConnectWithoutUserPermissionsInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionCreateWithoutUserPermissionsInput, {nullable:false})
    @Type(() => PermissionCreateWithoutUserPermissionsInput)
    create!: PermissionCreateWithoutUserPermissionsInput;
}
