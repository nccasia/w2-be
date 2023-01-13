import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { Type } from 'class-transformer';
import { ResourceCreateWithoutOrganizationInput } from './resource-create-without-organization.input';

@InputType()
export class ResourceCreateOrConnectWithoutOrganizationInput {

    @Field(() => ResourceWhereUniqueInput, {nullable:false})
    @Type(() => ResourceWhereUniqueInput)
    where!: ResourceWhereUniqueInput;

    @Field(() => ResourceCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => ResourceCreateWithoutOrganizationInput)
    create!: ResourceCreateWithoutOrganizationInput;
}
