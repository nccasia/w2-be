import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserPermissionsInput } from './user-create-without-user-permissions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserPermissionsInput } from './user-create-or-connect-without-user-permissions.input';
import { UserUpsertWithoutUserPermissionsInput } from './user-upsert-without-user-permissions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUserPermissionsInput } from './user-update-without-user-permissions.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserPermissionsNestedInput {

    @Field(() => UserCreateWithoutUserPermissionsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserPermissionsInput)
    create?: UserCreateWithoutUserPermissionsInput;

    @Field(() => UserCreateOrConnectWithoutUserPermissionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserPermissionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserPermissionsInput;

    @Field(() => UserUpsertWithoutUserPermissionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserPermissionsInput)
    upsert?: UserUpsertWithoutUserPermissionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUserPermissionsInput, {nullable:true})
    @Type(() => UserUpdateWithoutUserPermissionsInput)
    update?: UserUpdateWithoutUserPermissionsInput;
}
