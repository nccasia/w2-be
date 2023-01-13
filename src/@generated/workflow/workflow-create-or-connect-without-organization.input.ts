import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowCreateWithoutOrganizationInput } from './workflow-create-without-organization.input';

@InputType()
export class WorkflowCreateOrConnectWithoutOrganizationInput {

    @Field(() => WorkflowWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowWhereUniqueInput)
    where!: WorkflowWhereUniqueInput;

    @Field(() => WorkflowCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => WorkflowCreateWithoutOrganizationInput)
    create!: WorkflowCreateWithoutOrganizationInput;
}
