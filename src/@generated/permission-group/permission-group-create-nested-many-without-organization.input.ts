import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroupCreateWithoutOrganizationInput } from './permission-group-create-without-organization.input';
import { Type } from 'class-transformer';
import { PermissionGroupCreateOrConnectWithoutOrganizationInput } from './permission-group-create-or-connect-without-organization.input';
import { PermissionGroupCreateManyOrganizationInputEnvelope } from './permission-group-create-many-organization-input-envelope.input';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';

@InputType()
export class PermissionGroupCreateNestedManyWithoutOrganizationInput {

    @Field(() => [PermissionGroupCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionGroupCreateWithoutOrganizationInput)
    create?: Array<PermissionGroupCreateWithoutOrganizationInput>;

    @Field(() => [PermissionGroupCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionGroupCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<PermissionGroupCreateOrConnectWithoutOrganizationInput>;

    @Field(() => PermissionGroupCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => PermissionGroupCreateManyOrganizationInputEnvelope)
    createMany?: PermissionGroupCreateManyOrganizationInputEnvelope;

    @Field(() => [PermissionGroupWhereUniqueInput], {nullable:true})
    @Type(() => PermissionGroupWhereUniqueInput)
    connect?: Array<PermissionGroupWhereUniqueInput>;
}
