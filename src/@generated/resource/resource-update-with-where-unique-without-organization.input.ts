import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ResourceWhereUniqueInput } from './resource-where-unique.input';
import { Type } from 'class-transformer';
import { ResourceUpdateWithoutOrganizationInput } from './resource-update-without-organization.input';

@InputType()
export class ResourceUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => ResourceWhereUniqueInput, {nullable:false})
    @Type(() => ResourceWhereUniqueInput)
    where!: ResourceWhereUniqueInput;

    @Field(() => ResourceUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => ResourceUpdateWithoutOrganizationInput)
    data!: ResourceUpdateWithoutOrganizationInput;
}
