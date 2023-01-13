import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { Type } from 'class-transformer';
import { ResourceUpdateWithoutOrganizationInput } from './resource-update-without-organization.input';
import { ResourceCreateWithoutOrganizationInput } from './resource-create-without-organization.input';

@InputType()
export class ResourceUpsertWithWhereUniqueWithoutOrganizationInput {

    @Field(() => ResourceWhereUniqueInput, {nullable:false})
    @Type(() => ResourceWhereUniqueInput)
    where!: ResourceWhereUniqueInput;

    @Field(() => ResourceUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => ResourceUpdateWithoutOrganizationInput)
    update!: ResourceUpdateWithoutOrganizationInput;

    @Field(() => ResourceCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => ResourceCreateWithoutOrganizationInput)
    create!: ResourceCreateWithoutOrganizationInput;
}
