import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutOrganizationInput } from './permission-create-without-organization.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutOrganizationInput } from './permission-create-or-connect-without-organization.input';
import { PermissionUpsertWithWhereUniqueWithoutOrganizationInput } from './permission-upsert-with-where-unique-without-organization.input';
import { PermissionCreateManyOrganizationInputEnvelope } from './permission-create-many-organization-input-envelope.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithWhereUniqueWithoutOrganizationInput } from './permission-update-with-where-unique-without-organization.input';
import { PermissionUpdateManyWithWhereWithoutOrganizationInput } from './permission-update-many-with-where-without-organization.input';
import { PermissionScalarWhereInput } from './permission-scalar-where.input';

@InputType()
export class PermissionUncheckedUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [PermissionCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionCreateWithoutOrganizationInput)
    create?: Array<PermissionCreateWithoutOrganizationInput>;

    @Field(() => [PermissionCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [PermissionUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<PermissionUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => PermissionCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => PermissionCreateManyOrganizationInputEnvelope)
    createMany?: PermissionCreateManyOrganizationInputEnvelope;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    set?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    disconnect?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    delete?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<PermissionUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [PermissionUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<PermissionUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    @Type(() => PermissionScalarWhereInput)
    deleteMany?: Array<PermissionScalarWhereInput>;
}
