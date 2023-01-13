import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { OrganizationCreateNestedOneWithoutSettingsInput } from '../organization/organization-create-nested-one-without-settings.input';

@InputType()
export class SettingsCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    value?: any;

    @Field(() => OrganizationCreateNestedOneWithoutSettingsInput, {nullable:false})
    organization!: OrganizationCreateNestedOneWithoutSettingsInput;
}
