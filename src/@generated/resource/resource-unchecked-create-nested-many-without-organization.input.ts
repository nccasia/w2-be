import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceCreateWithoutOrganizationInput } from './resource-create-without-organization.input';
import { Type } from 'class-transformer';
import { ResourceCreateOrConnectWithoutOrganizationInput } from './resource-create-or-connect-without-organization.input';
import { ResourceCreateManyOrganizationInputEnvelope } from './resource-create-many-organization-input-envelope.input';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';

@InputType()
export class ResourceUncheckedCreateNestedManyWithoutOrganizationInput {

    @Field(() => [ResourceCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => ResourceCreateWithoutOrganizationInput)
    create?: Array<ResourceCreateWithoutOrganizationInput>;

    @Field(() => [ResourceCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => ResourceCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<ResourceCreateOrConnectWithoutOrganizationInput>;

    @Field(() => ResourceCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => ResourceCreateManyOrganizationInputEnvelope)
    createMany?: ResourceCreateManyOrganizationInputEnvelope;

    @Field(() => [ResourceWhereUniqueInput], {nullable:true})
    @Type(() => ResourceWhereUniqueInput)
    connect?: Array<ResourceWhereUniqueInput>;
}
