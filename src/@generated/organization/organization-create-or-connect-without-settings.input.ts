import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutSettingsInput } from './organization-create-without-settings.input';

@InputType()
export class OrganizationCreateOrConnectWithoutSettingsInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutSettingsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutSettingsInput)
    create!: OrganizationCreateWithoutSettingsInput;
}
