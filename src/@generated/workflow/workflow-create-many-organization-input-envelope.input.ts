import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateManyOrganizationInput } from './workflow-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class WorkflowCreateManyOrganizationInputEnvelope {

    @Field(() => [WorkflowCreateManyOrganizationInput], {nullable:false})
    @Type(() => WorkflowCreateManyOrganizationInput)
    data!: Array<WorkflowCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
