import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionCreateWithoutUserInput } from './user-permission-create-without-user.input';
import { Type } from 'class-transformer';
import { UserPermissionCreateOrConnectWithoutUserInput } from './user-permission-create-or-connect-without-user.input';
import { UserPermissionCreateManyUserInputEnvelope } from './user-permission-create-many-user-input-envelope.input';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';

@InputType()
export class UserPermissionCreateNestedManyWithoutUserInput {

    @Field(() => [UserPermissionCreateWithoutUserInput], {nullable:true})
    @Type(() => UserPermissionCreateWithoutUserInput)
    create?: Array<UserPermissionCreateWithoutUserInput>;

    @Field(() => [UserPermissionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserPermissionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserPermissionCreateOrConnectWithoutUserInput>;

    @Field(() => UserPermissionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserPermissionCreateManyUserInputEnvelope)
    createMany?: UserPermissionCreateManyUserInputEnvelope;

    @Field(() => [UserPermissionWhereUniqueInput], {nullable:true})
    @Type(() => UserPermissionWhereUniqueInput)
    connect?: Array<UserPermissionWhereUniqueInput>;
}
