import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutWorkflowsInput } from './organization-create-without-workflows.input';

@InputType()
export class OrganizationCreateOrConnectWithoutWorkflowsInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutWorkflowsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutWorkflowsInput)
    create!: OrganizationCreateWithoutWorkflowsInput;
}
