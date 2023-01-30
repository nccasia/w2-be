import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSettingUpdateManyMutationInput } from '../user-setting/user-setting-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserSettingWhereInput } from '../user-setting/user-setting-where.input';

@ArgsType()
export class UpdateManyUserSettingArgs {

    @Field(() => UserSettingUpdateManyMutationInput, {nullable:false})
    @Type(() => UserSettingUpdateManyMutationInput)
    data!: UserSettingUpdateManyMutationInput;

    @Field(() => UserSettingWhereInput, {nullable:true})
    @Type(() => UserSettingWhereInput)
    where?: UserSettingWhereInput;
}
