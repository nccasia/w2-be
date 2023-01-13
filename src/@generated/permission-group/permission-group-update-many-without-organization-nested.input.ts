import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupCreateWithoutOrganizationInput } from './permission-group-create-without-organization.input';
import { Type } from 'class-transformer';
import { PermissionGroupCreateOrConnectWithoutOrganizationInput } from './permission-group-create-or-connect-without-organization.input';
import { PermissionGroupUpsertWithWhereUniqueWithoutOrganizationInput } from './permission-group-upsert-with-where-unique-without-organization.input';
import { PermissionGroupCreateManyOrganizationInputEnvelope } from './permission-group-create-many-organization-input-envelope.input';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';
import { PermissionGroupUpdateWithWhereUniqueWithoutOrganizationInput } from './permission-group-update-with-where-unique-without-organization.input';
import { PermissionGroupUpdateManyWithWhereWithoutOrganizationInput } from './permission-group-update-many-with-where-without-organization.input';
import { PermissionGroupScalarWhereInput } from './permission-group-scalar-where.input';

@InputType()
export class PermissionGroupUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [PermissionGroupCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionGroupCreateWithoutOrganizationInput)
    create?: Array<PermissionGroupCreateWithoutOrganizationInput>;

    @Field(() => [PermissionGroupCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionGroupCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<PermissionGroupCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [PermissionGroupUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionGroupUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<PermissionGroupUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => PermissionGroupCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => PermissionGroupCreateManyOrganizationInputEnvelope)
    createMany?: PermissionGroupCreateManyOrganizationInputEnvelope;

    @Field(() => [PermissionGroupWhereUniqueInput], {nullable:true})
    @Type(() => PermissionGroupWhereUniqueInput)
    set?: Array<PermissionGroupWhereUniqueInput>;

    @Field(() => [PermissionGroupWhereUniqueInput], {nullable:true})
    @Type(() => PermissionGroupWhereUniqueInput)
    disconnect?: Array<PermissionGroupWhereUniqueInput>;

    @Field(() => [PermissionGroupWhereUniqueInput], {nullable:true})
    @Type(() => PermissionGroupWhereUniqueInput)
    delete?: Array<PermissionGroupWhereUniqueInput>;

    @Field(() => [PermissionGroupWhereUniqueInput], {nullable:true})
    @Type(() => PermissionGroupWhereUniqueInput)
    connect?: Array<PermissionGroupWhereUniqueInput>;

    @Field(() => [PermissionGroupUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionGroupUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<PermissionGroupUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [PermissionGroupUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionGroupUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<PermissionGroupUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [PermissionGroupScalarWhereInput], {nullable:true})
    @Type(() => PermissionGroupScalarWhereInput)
    deleteMany?: Array<PermissionGroupScalarWhereInput>;
}
