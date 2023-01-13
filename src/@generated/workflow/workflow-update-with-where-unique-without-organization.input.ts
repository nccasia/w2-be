import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowUpdateWithoutOrganizationInput } from './workflow-update-without-organization.input';

@InputType()
export class WorkflowUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => WorkflowWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowWhereUniqueInput)
    where!: WorkflowWhereUniqueInput;

    @Field(() => WorkflowUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => WorkflowUpdateWithoutOrganizationInput)
    data!: WorkflowUpdateWithoutOrganizationInput;
}
