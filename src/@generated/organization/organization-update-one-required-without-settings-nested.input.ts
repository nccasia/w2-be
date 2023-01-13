import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutSettingsInput } from './organization-create-without-settings.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutSettingsInput } from './organization-create-or-connect-without-settings.input';
import { OrganizationUpsertWithoutSettingsInput } from './organization-upsert-without-settings.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutSettingsInput } from './organization-update-without-settings.input';

@InputType()
export class OrganizationUpdateOneRequiredWithoutSettingsNestedInput {

    @Field(() => OrganizationCreateWithoutSettingsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutSettingsInput)
    create?: OrganizationCreateWithoutSettingsInput;

    @Field(() => OrganizationCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutSettingsInput;

    @Field(() => OrganizationUpsertWithoutSettingsInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutSettingsInput)
    upsert?: OrganizationUpsertWithoutSettingsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutSettingsInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutSettingsInput)
    update?: OrganizationUpdateWithoutSettingsInput;
}
