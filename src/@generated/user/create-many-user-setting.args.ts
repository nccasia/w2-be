import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSettingCreateManyInput } from '../user-setting/user-setting-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserSettingArgs {

    @Field(() => [UserSettingCreateManyInput], {nullable:false})
    @Type(() => UserSettingCreateManyInput)
    data!: Array<UserSettingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
