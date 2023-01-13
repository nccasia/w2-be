import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowUpdateWithoutOrganizationInput } from './workflow-update-without-organization.input';
import { WorkflowCreateWithoutOrganizationInput } from './workflow-create-without-organization.input';

@InputType()
export class WorkflowUpsertWithWhereUniqueWithoutOrganizationInput {

    @Field(() => WorkflowWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowWhereUniqueInput)
    where!: WorkflowWhereUniqueInput;

    @Field(() => WorkflowUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => WorkflowUpdateWithoutOrganizationInput)
    update!: WorkflowUpdateWithoutOrganizationInput;

    @Field(() => WorkflowCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => WorkflowCreateWithoutOrganizationInput)
    create!: WorkflowCreateWithoutOrganizationInput;
}
