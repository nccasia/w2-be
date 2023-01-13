import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateWithoutOrganizationInput } from './workflow-create-without-organization.input';
import { Type } from 'class-transformer';
import { WorkflowCreateOrConnectWithoutOrganizationInput } from './workflow-create-or-connect-without-organization.input';
import { WorkflowUpsertWithWhereUniqueWithoutOrganizationInput } from './workflow-upsert-with-where-unique-without-organization.input';
import { WorkflowCreateManyOrganizationInputEnvelope } from './workflow-create-many-organization-input-envelope.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { WorkflowUpdateWithWhereUniqueWithoutOrganizationInput } from './workflow-update-with-where-unique-without-organization.input';
import { WorkflowUpdateManyWithWhereWithoutOrganizationInput } from './workflow-update-many-with-where-without-organization.input';
import { WorkflowScalarWhereInput } from './workflow-scalar-where.input';

@InputType()
export class WorkflowUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [WorkflowCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => WorkflowCreateWithoutOrganizationInput)
    create?: Array<WorkflowCreateWithoutOrganizationInput>;

    @Field(() => [WorkflowCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => WorkflowCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<WorkflowCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [WorkflowUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => WorkflowUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<WorkflowUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => WorkflowCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => WorkflowCreateManyOrganizationInputEnvelope)
    createMany?: WorkflowCreateManyOrganizationInputEnvelope;

    @Field(() => [WorkflowWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    set?: Array<WorkflowWhereUniqueInput>;

    @Field(() => [WorkflowWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    disconnect?: Array<WorkflowWhereUniqueInput>;

    @Field(() => [WorkflowWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    delete?: Array<WorkflowWhereUniqueInput>;

    @Field(() => [WorkflowWhereUniqueInput], {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    connect?: Array<WorkflowWhereUniqueInput>;

    @Field(() => [WorkflowUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => WorkflowUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<WorkflowUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [WorkflowUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => WorkflowUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<WorkflowUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [WorkflowScalarWhereInput], {nullable:true})
    @Type(() => WorkflowScalarWhereInput)
    deleteMany?: Array<WorkflowScalarWhereInput>;
}
