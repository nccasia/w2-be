import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSettingWhereUniqueInput } from './user-setting-where-unique.input';
import { Type } from 'class-transformer';
import { UserSettingUpdateWithoutUserInput } from './user-setting-update-without-user.input';
import { UserSettingCreateWithoutUserInput } from './user-setting-create-without-user.input';

@InputType()
export class UserSettingUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserSettingWhereUniqueInput, {nullable:false})
    @Type(() => UserSettingWhereUniqueInput)
    where!: UserSettingWhereUniqueInput;

    @Field(() => UserSettingUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserSettingUpdateWithoutUserInput)
    update!: UserSettingUpdateWithoutUserInput;

    @Field(() => UserSettingCreateWithoutUserInput, {nullable:false})
    @Type(() => UserSettingCreateWithoutUserInput)
    create!: UserSettingCreateWithoutUserInput;
}
