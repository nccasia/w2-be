import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutSettingsInput } from './organization-update-without-settings.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutSettingsInput } from './organization-create-without-settings.input';

@InputType()
export class OrganizationUpsertWithoutSettingsInput {

    @Field(() => OrganizationUpdateWithoutSettingsInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutSettingsInput)
    update!: OrganizationUpdateWithoutSettingsInput;

    @Field(() => OrganizationCreateWithoutSettingsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutSettingsInput)
    create!: OrganizationCreateWithoutSettingsInput;
}
