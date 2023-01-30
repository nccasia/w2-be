import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSettingCreateWithoutUserInput } from './user-setting-create-without-user.input';
import { Type } from 'class-transformer';
import { UserSettingCreateOrConnectWithoutUserInput } from './user-setting-create-or-connect-without-user.input';
import { UserSettingUpsertWithWhereUniqueWithoutUserInput } from './user-setting-upsert-with-where-unique-without-user.input';
import { UserSettingCreateManyUserInputEnvelope } from './user-setting-create-many-user-input-envelope.input';
import { UserSettingWhereUniqueInput } from './user-setting-where-unique.input';
import { UserSettingUpdateWithWhereUniqueWithoutUserInput } from './user-setting-update-with-where-unique-without-user.input';
import { UserSettingUpdateManyWithWhereWithoutUserInput } from './user-setting-update-many-with-where-without-user.input';
import { UserSettingScalarWhereInput } from './user-setting-scalar-where.input';

@InputType()
export class UserSettingUpdateManyWithoutUserNestedInput {

    @Field(() => [UserSettingCreateWithoutUserInput], {nullable:true})
    @Type(() => UserSettingCreateWithoutUserInput)
    create?: Array<UserSettingCreateWithoutUserInput>;

    @Field(() => [UserSettingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserSettingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserSettingCreateOrConnectWithoutUserInput>;

    @Field(() => [UserSettingUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserSettingUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserSettingUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserSettingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserSettingCreateManyUserInputEnvelope)
    createMany?: UserSettingCreateManyUserInputEnvelope;

    @Field(() => [UserSettingWhereUniqueInput], {nullable:true})
    @Type(() => UserSettingWhereUniqueInput)
    set?: Array<UserSettingWhereUniqueInput>;

    @Field(() => [UserSettingWhereUniqueInput], {nullable:true})
    @Type(() => UserSettingWhereUniqueInput)
    disconnect?: Array<UserSettingWhereUniqueInput>;

    @Field(() => [UserSettingWhereUniqueInput], {nullable:true})
    @Type(() => UserSettingWhereUniqueInput)
    delete?: Array<UserSettingWhereUniqueInput>;

    @Field(() => [UserSettingWhereUniqueInput], {nullable:true})
    @Type(() => UserSettingWhereUniqueInput)
    connect?: Array<UserSettingWhereUniqueInput>;

    @Field(() => [UserSettingUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserSettingUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserSettingUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserSettingUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserSettingUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserSettingUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserSettingScalarWhereInput], {nullable:true})
    @Type(() => UserSettingScalarWhereInput)
    deleteMany?: Array<UserSettingScalarWhereInput>;
}
