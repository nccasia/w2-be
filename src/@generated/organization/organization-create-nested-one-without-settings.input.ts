import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutSettingsInput } from './organization-create-without-settings.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutSettingsInput } from './organization-create-or-connect-without-settings.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutSettingsInput {

    @Field(() => OrganizationCreateWithoutSettingsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutSettingsInput)
    create?: OrganizationCreateWithoutSettingsInput;

    @Field(() => OrganizationCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutSettingsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
