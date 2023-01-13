import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionCreateWithoutUserInput } from './user-permission-create-without-user.input';
import { Type } from 'class-transformer';
import { UserPermissionCreateOrConnectWithoutUserInput } from './user-permission-create-or-connect-without-user.input';
import { UserPermissionUpsertWithWhereUniqueWithoutUserInput } from './user-permission-upsert-with-where-unique-without-user.input';
import { UserPermissionCreateManyUserInputEnvelope } from './user-permission-create-many-user-input-envelope.input';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';
import { UserPermissionUpdateWithWhereUniqueWithoutUserInput } from './user-permission-update-with-where-unique-without-user.input';
import { UserPermissionUpdateManyWithWhereWithoutUserInput } from './user-permission-update-many-with-where-without-user.input';
import { UserPermissionScalarWhereInput } from './user-permission-scalar-where.input';

@InputType()
export class UserPermissionUpdateManyWithoutUserNestedInput {

    @Field(() => [UserPermissionCreateWithoutUserInput], {nullable:true})
    @Type(() => UserPermissionCreateWithoutUserInput)
    create?: Array<UserPermissionCreateWithoutUserInput>;

    @Field(() => [UserPermissionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserPermissionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserPermissionCreateOrConnectWithoutUserInput>;

    @Field(() => [UserPermissionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserPermissionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserPermissionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserPermissionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserPermissionCreateManyUserInputEnvelope)
    createMany?: UserPermissionCreateManyUserInputEnvelope;

    @Field(() => [UserPermissionWhereUniqueInput], {nullable:true})
    @Type(() => UserPermissionWhereUniqueInput)
    set?: Array<UserPermissionWhereUniqueInput>;

    @Field(() => [UserPermissionWhereUniqueInput], {nullable:true})
    @Type(() => UserPermissionWhereUniqueInput)
    disconnect?: Array<UserPermissionWhereUniqueInput>;

    @Field(() => [UserPermissionWhereUniqueInput], {nullable:true})
    @Type(() => UserPermissionWhereUniqueInput)
    delete?: Array<UserPermissionWhereUniqueInput>;

    @Field(() => [UserPermissionWhereUniqueInput], {nullable:true})
    @Type(() => UserPermissionWhereUniqueInput)
    connect?: Array<UserPermissionWhereUniqueInput>;

    @Field(() => [UserPermissionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserPermissionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserPermissionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserPermissionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserPermissionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserPermissionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserPermissionScalarWhereInput], {nullable:true})
    @Type(() => UserPermissionScalarWhereInput)
    deleteMany?: Array<UserPermissionScalarWhereInput>;
}
