import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutWorkflowsInput } from './organization-create-without-workflows.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutWorkflowsInput } from './organization-create-or-connect-without-workflows.input';
import { OrganizationUpsertWithoutWorkflowsInput } from './organization-upsert-without-workflows.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutWorkflowsInput } from './organization-update-without-workflows.input';

@InputType()
export class OrganizationUpdateOneRequiredWithoutWorkflowsNestedInput {

    @Field(() => OrganizationCreateWithoutWorkflowsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutWorkflowsInput)
    create?: OrganizationCreateWithoutWorkflowsInput;

    @Field(() => OrganizationCreateOrConnectWithoutWorkflowsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutWorkflowsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutWorkflowsInput;

    @Field(() => OrganizationUpsertWithoutWorkflowsInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutWorkflowsInput)
    upsert?: OrganizationUpsertWithoutWorkflowsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutWorkflowsInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutWorkflowsInput)
    update?: OrganizationUpdateWithoutWorkflowsInput;
}
