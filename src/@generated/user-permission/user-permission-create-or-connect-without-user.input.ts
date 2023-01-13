import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';
import { Type } from 'class-transformer';
import { UserPermissionCreateWithoutUserInput } from './user-permission-create-without-user.input';

@InputType()
export class UserPermissionCreateOrConnectWithoutUserInput {

    @Field(() => UserPermissionWhereUniqueInput, {nullable:false})
    @Type(() => UserPermissionWhereUniqueInput)
    where!: UserPermissionWhereUniqueInput;

    @Field(() => UserPermissionCreateWithoutUserInput, {nullable:false})
    @Type(() => UserPermissionCreateWithoutUserInput)
    create!: UserPermissionCreateWithoutUserInput;
}
