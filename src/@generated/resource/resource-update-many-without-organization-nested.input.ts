import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceCreateWithoutOrganizationInput } from './resource-create-without-organization.input';
import { Type } from 'class-transformer';
import { ResourceCreateOrConnectWithoutOrganizationInput } from './resource-create-or-connect-without-organization.input';
import { ResourceUpsertWithWhereUniqueWithoutOrganizationInput } from './resource-upsert-with-where-unique-without-organization.input';
import { ResourceCreateManyOrganizationInputEnvelope } from './resource-create-many-organization-input-envelope.input';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { ResourceUpdateWithWhereUniqueWithoutOrganizationInput } from './resource-update-with-where-unique-without-organization.input';
import { ResourceUpdateManyWithWhereWithoutOrganizationInput } from './resource-update-many-with-where-without-organization.input';
import { ResourceScalarWhereInput } from './resource-scalar-where.input';

@InputType()
export class ResourceUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [ResourceCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => ResourceCreateWithoutOrganizationInput)
    create?: Array<ResourceCreateWithoutOrganizationInput>;

    @Field(() => [ResourceCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => ResourceCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<ResourceCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [ResourceUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => ResourceUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<ResourceUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => ResourceCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => ResourceCreateManyOrganizationInputEnvelope)
    createMany?: ResourceCreateManyOrganizationInputEnvelope;

    @Field(() => [ResourceWhereUniqueInput], {nullable:true})
    @Type(() => ResourceWhereUniqueInput)
    set?: Array<ResourceWhereUniqueInput>;

    @Field(() => [ResourceWhereUniqueInput], {nullable:true})
    @Type(() => ResourceWhereUniqueInput)
    disconnect?: Array<ResourceWhereUniqueInput>;

    @Field(() => [ResourceWhereUniqueInput], {nullable:true})
    @Type(() => ResourceWhereUniqueInput)
    delete?: Array<ResourceWhereUniqueInput>;

    @Field(() => [ResourceWhereUniqueInput], {nullable:true})
    @Type(() => ResourceWhereUniqueInput)
    connect?: Array<ResourceWhereUniqueInput>;

    @Field(() => [ResourceUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => ResourceUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<ResourceUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [ResourceUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => ResourceUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<ResourceUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [ResourceScalarWhereInput], {nullable:true})
    @Type(() => ResourceScalarWhereInput)
    deleteMany?: Array<ResourceScalarWhereInput>;
}
