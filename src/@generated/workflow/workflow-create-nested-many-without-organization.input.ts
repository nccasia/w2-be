import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateWithoutOrganizationInput } from './workflow-create-without-organization.input';
import { Type } from 'class-transformer';
import { WorkflowCreateOrConnectWithoutOrganizationInput } from './workflow-create-or-connect-without-organization.input';
import { WorkflowCreateManyOrganizationInputEnvelope } from './workflow-create-many-organization-input-envelope.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';

@InputType()
export class WorkflowCreateNestedManyWithoutOrganizationInput {

    @Field(() => [WorkflowCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => WorkflowCreateWithoutOrganizationInput)
    create?: Array<WorkflowCreateWithoutOrganizationInput>;

    @Field(() => [WorkflowCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => WorkflowCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<WorkflowCreateOrConnectWithoutOrganizationInput>;

    @Field(() => WorkflowCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => WorkflowCreateManyOrganizationInputEnvelope)
    createMany?: WorkflowCreateManyOrganizationInputEnvelope;

    @Field(() => [WorkflowWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    connect?: Array<WorkflowWhereUniqueInput>;
}
