import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSettingWhereUniqueInput } from './user-setting-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserSettingOrThrowArgs {

    @Field(() => UserSettingWhereUniqueInput, {nullable:false})
    @Type(() => UserSettingWhereUniqueInput)
    where!: UserSettingWhereUniqueInput;
}
