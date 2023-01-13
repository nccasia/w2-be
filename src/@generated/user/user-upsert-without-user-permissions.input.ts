import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserPermissionsInput } from './user-update-without-user-permissions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserPermissionsInput } from './user-create-without-user-permissions.input';

@InputType()
export class UserUpsertWithoutUserPermissionsInput {

    @Field(() => UserUpdateWithoutUserPermissionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserPermissionsInput)
    update!: UserUpdateWithoutUserPermissionsInput;

    @Field(() => UserCreateWithoutUserPermissionsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserPermissionsInput)
    create!: UserCreateWithoutUserPermissionsInput;
}
