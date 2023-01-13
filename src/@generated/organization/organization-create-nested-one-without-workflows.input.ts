import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutWorkflowsInput } from './organization-create-without-workflows.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutWorkflowsInput } from './organization-create-or-connect-without-workflows.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutWorkflowsInput {

    @Field(() => OrganizationCreateWithoutWorkflowsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutWorkflowsInput)
    create?: OrganizationCreateWithoutWorkflowsInput;

    @Field(() => OrganizationCreateOrConnectWithoutWorkflowsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutWorkflowsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutWorkflowsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
