import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowCreateWithoutActivitiesInput } from './workflow-create-without-activities.input';

@InputType()
export class WorkflowCreateOrConnectWithoutActivitiesInput {

    @Field(() => WorkflowWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowWhereUniqueInput)
    where!: WorkflowWhereUniqueInput;

    @Field(() => WorkflowCreateWithoutActivitiesInput, {nullable:false})
    @Type(() => WorkflowCreateWithoutActivitiesInput)
    create!: WorkflowCreateWithoutActivitiesInput;
}
