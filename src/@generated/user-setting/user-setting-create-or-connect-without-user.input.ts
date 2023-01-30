import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSettingWhereUniqueInput } from './user-setting-where-unique.input';
import { Type } from 'class-transformer';
import { UserSettingCreateWithoutUserInput } from './user-setting-create-without-user.input';

@InputType()
export class UserSettingCreateOrConnectWithoutUserInput {

    @Field(() => UserSettingWhereUniqueInput, {nullable:false})
    @Type(() => UserSettingWhereUniqueInput)
    where!: UserSettingWhereUniqueInput;

    @Field(() => UserSettingCreateWithoutUserInput, {nullable:false})
    @Type(() => UserSettingCreateWithoutUserInput)
    create!: UserSettingCreateWithoutUserInput;
}
