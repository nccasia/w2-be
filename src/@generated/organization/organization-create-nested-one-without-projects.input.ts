import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutProjectsInput } from './organization-create-without-projects.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutProjectsInput } from './organization-create-or-connect-without-projects.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutProjectsInput {

    @Field(() => OrganizationCreateWithoutProjectsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutProjectsInput)
    create?: OrganizationCreateWithoutProjectsInput;

    @Field(() => OrganizationCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutProjectsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
