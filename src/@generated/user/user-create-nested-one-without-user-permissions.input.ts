import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserPermissionsInput } from './user-create-without-user-permissions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserPermissionsInput } from './user-create-or-connect-without-user-permissions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserPermissionsInput {

    @Field(() => UserCreateWithoutUserPermissionsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserPermissionsInput)
    create?: UserCreateWithoutUserPermissionsInput;

    @Field(() => UserCreateOrConnectWithoutUserPermissionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserPermissionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserPermissionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
