import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';
import { Type } from 'class-transformer';
import { UserPermissionUpdateWithoutPermissionInput } from './user-permission-update-without-permission.input';

@InputType()
export class UserPermissionUpdateWithWhereUniqueWithoutPermissionInput {

    @Field(() => UserPermissionWhereUniqueInput, {nullable:false})
    @Type(() => UserPermissionWhereUniqueInput)
    where!: UserPermissionWhereUniqueInput;

    @Field(() => UserPermissionUpdateWithoutPermissionInput, {nullable:false})
    @Type(() => UserPermissionUpdateWithoutPermissionInput)
    data!: UserPermissionUpdateWithoutPermissionInput;
}
