import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserPermissionsInput } from './user-create-without-user-permissions.input';

@InputType()
export class UserCreateOrConnectWithoutUserPermissionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUserPermissionsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserPermissionsInput)
    create!: UserCreateWithoutUserPermissionsInput;
}
