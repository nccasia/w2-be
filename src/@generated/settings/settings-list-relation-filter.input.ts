import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingsWhereInput } from './settings-where.input';

@InputType()
export class SettingsListRelationFilter {

    @Field(() => SettingsWhereInput, {nullable:true})
    every?: SettingsWhereInput;

    @Field(() => SettingsWhereInput, {nullable:true})
    some?: SettingsWhereInput;

    @Field(() => SettingsWhereInput, {nullable:true})
    none?: SettingsWhereInput;
}
