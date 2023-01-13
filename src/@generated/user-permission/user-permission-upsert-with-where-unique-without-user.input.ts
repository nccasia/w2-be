import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';
import { Type } from 'class-transformer';
import { UserPermissionUpdateWithoutUserInput } from './user-permission-update-without-user.input';
import { UserPermissionCreateWithoutUserInput } from './user-permission-create-without-user.input';

@InputType()
export class UserPermissionUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserPermissionWhereUniqueInput, {nullable:false})
    @Type(() => UserPermissionWhereUniqueInput)
    where!: UserPermissionWhereUniqueInput;

    @Field(() => UserPermissionUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserPermissionUpdateWithoutUserInput)
    update!: UserPermissionUpdateWithoutUserInput;

    @Field(() => UserPermissionCreateWithoutUserInput, {nullable:false})
    @Type(() => UserPermissionCreateWithoutUserInput)
    create!: UserPermissionCreateWithoutUserInput;
}
