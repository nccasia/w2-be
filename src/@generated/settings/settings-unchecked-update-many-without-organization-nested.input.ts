import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingsCreateWithoutOrganizationInput } from './settings-create-without-organization.input';
import { Type } from 'class-transformer';
import { SettingsCreateOrConnectWithoutOrganizationInput } from './settings-create-or-connect-without-organization.input';
import { SettingsUpsertWithWhereUniqueWithoutOrganizationInput } from './settings-upsert-with-where-unique-without-organization.input';
import { SettingsCreateManyOrganizationInputEnvelope } from './settings-create-many-organization-input-envelope.input';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';
import { SettingsUpdateWithWhereUniqueWithoutOrganizationInput } from './settings-update-with-where-unique-without-organization.input';
import { SettingsUpdateManyWithWhereWithoutOrganizationInput } from './settings-update-many-with-where-without-organization.input';
import { SettingsScalarWhereInput } from './settings-scalar-where.input';

@InputType()
export class SettingsUncheckedUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [SettingsCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => SettingsCreateWithoutOrganizationInput)
    create?: Array<SettingsCreateWithoutOrganizationInput>;

    @Field(() => [SettingsCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => SettingsCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<SettingsCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [SettingsUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => SettingsUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<SettingsUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => SettingsCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => SettingsCreateManyOrganizationInputEnvelope)
    createMany?: SettingsCreateManyOrganizationInputEnvelope;

    @Field(() => [SettingsWhereUniqueInput], {nullable:true})
    @Type(() => SettingsWhereUniqueInput)
    set?: Array<SettingsWhereUniqueInput>;

    @Field(() => [SettingsWhereUniqueInput], {nullable:true})
    @Type(() => SettingsWhereUniqueInput)
    disconnect?: Array<SettingsWhereUniqueInput>;

    @Field(() => [SettingsWhereUniqueInput], {nullable:true})
    @Type(() => SettingsWhereUniqueInput)
    delete?: Array<SettingsWhereUniqueInput>;

    @Field(() => [SettingsWhereUniqueInput], {nullable:true})
    @Type(() => SettingsWhereUniqueInput)
    connect?: Array<SettingsWhereUniqueInput>;

    @Field(() => [SettingsUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => SettingsUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<SettingsUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [SettingsUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => SettingsUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<SettingsUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [SettingsScalarWhereInput], {nullable:true})
    @Type(() => SettingsScalarWhereInput)
    deleteMany?: Array<SettingsScalarWhereInput>;
}
