import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutResourcesInput } from './organization-create-without-resources.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutResourcesInput } from './organization-create-or-connect-without-resources.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutResourcesInput {

    @Field(() => OrganizationCreateWithoutResourcesInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutResourcesInput)
    create?: OrganizationCreateWithoutResourcesInput;

    @Field(() => OrganizationCreateOrConnectWithoutResourcesInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutResourcesInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutResourcesInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
