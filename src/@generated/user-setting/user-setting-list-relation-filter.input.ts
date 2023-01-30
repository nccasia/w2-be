import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSettingWhereInput } from './user-setting-where.input';

@InputType()
export class UserSettingListRelationFilter {

    @Field(() => UserSettingWhereInput, {nullable:true})
    every?: UserSettingWhereInput;

    @Field(() => UserSettingWhereInput, {nullable:true})
    some?: UserSettingWhereInput;

    @Field(() => UserSettingWhereInput, {nullable:true})
    none?: UserSettingWhereInput;
}
