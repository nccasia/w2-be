import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutUserSettingsInput } from '../user/user-create-nested-one-without-user-settings.input';

@InputType()
export class UserSettingCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    value?: any;

    @Field(() => UserCreateNestedOneWithoutUserSettingsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserSettingsInput;
}
