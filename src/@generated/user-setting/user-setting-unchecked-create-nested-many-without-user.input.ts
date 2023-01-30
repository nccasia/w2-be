import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSettingCreateWithoutUserInput } from './user-setting-create-without-user.input';
import { Type } from 'class-transformer';
import { UserSettingCreateOrConnectWithoutUserInput } from './user-setting-create-or-connect-without-user.input';
import { UserSettingCreateManyUserInputEnvelope } from './user-setting-create-many-user-input-envelope.input';
import { UserSettingWhereUniqueInput } from './user-setting-where-unique.input';

@InputType()
export class UserSettingUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserSettingCreateWithoutUserInput], {nullable:true})
    @Type(() => UserSettingCreateWithoutUserInput)
    create?: Array<UserSettingCreateWithoutUserInput>;

    @Field(() => [UserSettingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserSettingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserSettingCreateOrConnectWithoutUserInput>;

    @Field(() => UserSettingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserSettingCreateManyUserInputEnvelope)
    createMany?: UserSettingCreateManyUserInputEnvelope;

    @Field(() => [UserSettingWhereUniqueInput], {nullable:true})
    @Type(() => UserSettingWhereUniqueInput)
    connect?: Array<UserSettingWhereUniqueInput>;
}
