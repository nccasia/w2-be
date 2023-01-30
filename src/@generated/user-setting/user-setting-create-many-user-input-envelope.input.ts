import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSettingCreateManyUserInput } from './user-setting-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserSettingCreateManyUserInputEnvelope {

    @Field(() => [UserSettingCreateManyUserInput], {nullable:false})
    @Type(() => UserSettingCreateManyUserInput)
    data!: Array<UserSettingCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
