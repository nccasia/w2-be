import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingsCreateWithoutOrganizationInput } from './settings-create-without-organization.input';
import { Type } from 'class-transformer';
import { SettingsCreateOrConnectWithoutOrganizationInput } from './settings-create-or-connect-without-organization.input';
import { SettingsCreateManyOrganizationInputEnvelope } from './settings-create-many-organization-input-envelope.input';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';

@InputType()
export class SettingsCreateNestedManyWithoutOrganizationInput {

    @Field(() => [SettingsCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => SettingsCreateWithoutOrganizationInput)
    create?: Array<SettingsCreateWithoutOrganizationInput>;

    @Field(() => [SettingsCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => SettingsCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<SettingsCreateOrConnectWithoutOrganizationInput>;

    @Field(() => SettingsCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => SettingsCreateManyOrganizationInputEnvelope)
    createMany?: SettingsCreateManyOrganizationInputEnvelope;

    @Field(() => [SettingsWhereUniqueInput], {nullable:true})
    @Type(() => SettingsWhereUniqueInput)
    connect?: Array<SettingsWhereUniqueInput>;
}
