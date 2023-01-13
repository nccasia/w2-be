import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowUpdateWithoutTaskDefinitionsInput } from './workflow-update-without-task-definitions.input';
import { Type } from 'class-transformer';
import { WorkflowCreateWithoutTaskDefinitionsInput } from './workflow-create-without-task-definitions.input';

@InputType()
export class WorkflowUpsertWithoutTaskDefinitionsInput {

    @Field(() => WorkflowUpdateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => WorkflowUpdateWithoutTaskDefinitionsInput)
    update!: WorkflowUpdateWithoutTaskDefinitionsInput;

    @Field(() => WorkflowCreateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => WorkflowCreateWithoutTaskDefinitionsInput)
    create!: WorkflowCreateWithoutTaskDefinitionsInput;
}
