import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';
import { Type } from 'class-transformer';
import { UserPermissionCreateWithoutPermissionInput } from './user-permission-create-without-permission.input';

@InputType()
export class UserPermissionCreateOrConnectWithoutPermissionInput {

    @Field(() => UserPermissionWhereUniqueInput, {nullable:false})
    @Type(() => UserPermissionWhereUniqueInput)
    where!: UserPermissionWhereUniqueInput;

    @Field(() => UserPermissionCreateWithoutPermissionInput, {nullable:false})
    @Type(() => UserPermissionCreateWithoutPermissionInput)
    create!: UserPermissionCreateWithoutPermissionInput;
}
