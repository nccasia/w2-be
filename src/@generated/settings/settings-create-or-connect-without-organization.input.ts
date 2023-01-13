import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';
import { Type } from 'class-transformer';
import { SettingsCreateWithoutOrganizationInput } from './settings-create-without-organization.input';

@InputType()
export class SettingsCreateOrConnectWithoutOrganizationInput {

    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    @Type(() => SettingsWhereUniqueInput)
    where!: SettingsWhereUniqueInput;

    @Field(() => SettingsCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => SettingsCreateWithoutOrganizationInput)
    create!: SettingsCreateWithoutOrganizationInput;
}
