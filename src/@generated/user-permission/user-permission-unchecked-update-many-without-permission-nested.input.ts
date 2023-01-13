import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPermissionCreateWithoutPermissionInput } from './user-permission-create-without-permission.input';
import { Type } from 'class-transformer';
import { UserPermissionCreateOrConnectWithoutPermissionInput } from './user-permission-create-or-connect-without-permission.input';
import { UserPermissionUpsertWithWhereUniqueWithoutPermissionInput } from './user-permission-upsert-with-where-unique-without-permission.input';
import { UserPermissionCreateManyPermissionInputEnvelope } from './user-permission-create-many-permission-input-envelope.input';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';
import { UserPermissionUpdateWithWhereUniqueWithoutPermissionInput } from './user-permission-update-with-where-unique-without-permission.input';
import { UserPermissionUpdateManyWithWhereWithoutPermissionInput } from './user-permission-update-many-with-where-without-permission.input';
import { UserPermissionScalarWhereInput } from './user-permission-scalar-where.input';

@InputType()
export class UserPermissionUncheckedUpdateManyWithoutPermissionNestedInput {

    @Field(() => [UserPermissionCreateWithoutPermissionInput], {nullable:true})
    @Type(() => UserPermissionCreateWithoutPermissionInput)
    create?: Array<UserPermissionCreateWithoutPermissionInput>;

    @Field(() => [UserPermissionCreateOrConnectWithoutPermissionInput], {nullable:true})
    @Type(() => UserPermissionCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: Array<UserPermissionCreateOrConnectWithoutPermissionInput>;

    @Field(() => [UserPermissionUpsertWithWhereUniqueWithoutPermissionInput], {nullable:true})
    @Type(() => UserPermissionUpsertWithWhereUniqueWithoutPermissionInput)
    upsert?: Array<UserPermissionUpsertWithWhereUniqueWithoutPermissionInput>;

    @Field(() => UserPermissionCreateManyPermissionInputEnvelope, {nullable:true})
    @Type(() => UserPermissionCreateManyPermissionInputEnvelope)
    createMany?: UserPermissionCreateManyPermissionInputEnvelope;

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

    @Field(() => [UserPermissionUpdateWithWhereUniqueWithoutPermissionInput], {nullable:true})
    @Type(() => UserPermissionUpdateWithWhereUniqueWithoutPermissionInput)
    update?: Array<UserPermissionUpdateWithWhereUniqueWithoutPermissionInput>;

    @Field(() => [UserPermissionUpdateManyWithWhereWithoutPermissionInput], {nullable:true})
    @Type(() => UserPermissionUpdateManyWithWhereWithoutPermissionInput)
    updateMany?: Array<UserPermissionUpdateManyWithWhereWithoutPermissionInput>;

    @Field(() => [UserPermissionScalarWhereInput], {nullable:true})
    @Type(() => UserPermissionScalarWhereInput)
    deleteMany?: Array<UserPermissionScalarWhereInput>;
}
