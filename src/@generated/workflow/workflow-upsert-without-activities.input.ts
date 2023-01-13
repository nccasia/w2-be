import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowUpdateWithoutActivitiesInput } from './workflow-update-without-activities.input';
import { Type } from 'class-transformer';
import { WorkflowCreateWithoutActivitiesInput } from './workflow-create-without-activities.input';

@InputType()
export class WorkflowUpsertWithoutActivitiesInput {

    @Field(() => WorkflowUpdateWithoutActivitiesInput, {nullable:false})
    @Type(() => WorkflowUpdateWithoutActivitiesInput)
    update!: WorkflowUpdateWithoutActivitiesInput;

    @Field(() => WorkflowCreateWithoutActivitiesInput, {nullable:false})
    @Type(() => WorkflowCreateWithoutActivitiesInput)
    create!: WorkflowCreateWithoutActivitiesInput;
}
