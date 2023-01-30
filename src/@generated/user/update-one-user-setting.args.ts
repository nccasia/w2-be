import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSettingUpdateInput } from '../user-setting/user-setting-update.input';
import { Type } from 'class-transformer';
import { UserSettingWhereUniqueInput } from '../user-setting/user-setting-where-unique.input';

@ArgsType()
export class UpdateOneUserSettingArgs {

    @Field(() => UserSettingUpdateInput, {nullable:false})
    @Type(() => UserSettingUpdateInput)
    data!: UserSettingUpdateInput;

    @Field(() => UserSettingWhereUniqueInput, {nullable:false})
    @Type(() => UserSettingWhereUniqueInput)
    where!: UserSettingWhereUniqueInput;
}
