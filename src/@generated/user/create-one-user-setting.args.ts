import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSettingCreateInput } from '../user-setting/user-setting-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserSettingArgs {

    @Field(() => UserSettingCreateInput, {nullable:false})
    @Type(() => UserSettingCreateInput)
    data!: UserSettingCreateInput;
}
