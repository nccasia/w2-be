import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutWorkflowsInput } from './organization-update-without-workflows.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutWorkflowsInput } from './organization-create-without-workflows.input';

@InputType()
export class OrganizationUpsertWithoutWorkflowsInput {

    @Field(() => OrganizationUpdateWithoutWorkflowsInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutWorkflowsInput)
    update!: OrganizationUpdateWithoutWorkflowsInput;

    @Field(() => OrganizationCreateWithoutWorkflowsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutWorkflowsInput)
    create!: OrganizationCreateWithoutWorkflowsInput;
}
