import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutOrganizationInput } from './permission-create-without-organization.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutOrganizationInput } from './permission-create-or-connect-without-organization.input';
import { PermissionCreateManyOrganizationInputEnvelope } from './permission-create-many-organization-input-envelope.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionUncheckedCreateNestedManyWithoutOrganizationInput {

    @Field(() => [PermissionCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionCreateWithoutOrganizationInput)
    create?: Array<PermissionCreateWithoutOrganizationInput>;

    @Field(() => [PermissionCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutOrganizationInput>;

    @Field(() => PermissionCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => PermissionCreateManyOrganizationInputEnvelope)
    createMany?: PermissionCreateManyOrganizationInputEnvelope;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Array<PermissionWhereUniqueInput>;
}
