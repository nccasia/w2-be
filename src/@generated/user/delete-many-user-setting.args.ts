import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSettingWhereInput } from '../user-setting/user-setting-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserSettingArgs {

    @Field(() => UserSettingWhereInput, {nullable:true})
    @Type(() => UserSettingWhereInput)
    where?: UserSettingWhereInput;
}
