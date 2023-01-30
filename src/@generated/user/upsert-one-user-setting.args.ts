import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSettingWhereUniqueInput } from '../user-setting/user-setting-where-unique.input';
import { Type } from 'class-transformer';
import { UserSettingCreateInput } from '../user-setting/user-setting-create.input';
import { UserSettingUpdateInput } from '../user-setting/user-setting-update.input';

@ArgsType()
export class UpsertOneUserSettingArgs {

    @Field(() => UserSettingWhereUniqueInput, {nullable:false})
    @Type(() => UserSettingWhereUniqueInput)
    where!: UserSettingWhereUniqueInput;

    @Field(() => UserSettingCreateInput, {nullable:false})
    @Type(() => UserSettingCreateInput)
    create!: UserSettingCreateInput;

    @Field(() => UserSettingUpdateInput, {nullable:false})
    @Type(() => UserSettingUpdateInput)
    update!: UserSettingUpdateInput;
}
