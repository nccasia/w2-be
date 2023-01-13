import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';
import { Type } from 'class-transformer';
import { SettingsUpdateWithoutOrganizationInput } from './settings-update-without-organization.input';
import { SettingsCreateWithoutOrganizationInput } from './settings-create-without-organization.input';

@InputType()
export class SettingsUpsertWithWhereUniqueWithoutOrganizationInput {

    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    @Type(() => SettingsWhereUniqueInput)
    where!: SettingsWhereUniqueInput;

    @Field(() => SettingsUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => SettingsUpdateWithoutOrganizationInput)
    update!: SettingsUpdateWithoutOrganizationInput;

    @Field(() => SettingsCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => SettingsCreateWithoutOrganizationInput)
    create!: SettingsCreateWithoutOrganizationInput;
}
