import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutResourcesInput } from './organization-create-without-resources.input';

@InputType()
export class OrganizationCreateOrConnectWithoutResourcesInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutResourcesInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutResourcesInput)
    create!: OrganizationCreateWithoutResourcesInput;
}
