import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSettingWhereUniqueInput } from './user-setting-where-unique.input';
import { Type } from 'class-transformer';
import { UserSettingUpdateWithoutUserInput } from './user-setting-update-without-user.input';

@InputType()
export class UserSettingUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserSettingWhereUniqueInput, {nullable:false})
    @Type(() => UserSettingWhereUniqueInput)
    where!: UserSettingWhereUniqueInput;

    @Field(() => UserSettingUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserSettingUpdateWithoutUserInput)
    data!: UserSettingUpdateWithoutUserInput;
}
