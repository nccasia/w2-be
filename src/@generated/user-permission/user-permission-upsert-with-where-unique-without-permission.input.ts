import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';
import { Type } from 'class-transformer';
import { UserPermissionUpdateWithoutPermissionInput } from './user-permission-update-without-permission.input';
import { UserPermissionCreateWithoutPermissionInput } from './user-permission-create-without-permission.input';

@InputType()
export class UserPermissionUpsertWithWhereUniqueWithoutPermissionInput {

    @Field(() => UserPermissionWhereUniqueInput, {nullable:false})
    @Type(() => UserPermissionWhereUniqueInput)
    where!: UserPermissionWhereUniqueInput;

    @Field(() => UserPermissionUpdateWithoutPermissionInput, {nullable:false})
    @Type(() => UserPermissionUpdateWithoutPermissionInput)
    update!: UserPermissionUpdateWithoutPermissionInput;

    @Field(() => UserPermissionCreateWithoutPermissionInput, {nullable:false})
    @Type(() => UserPermissionCreateWithoutPermissionInput)
    create!: UserPermissionCreateWithoutPermissionInput;
}
