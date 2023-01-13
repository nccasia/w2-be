import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { Type } from 'class-transformer';
import { WorkflowCreateWithoutTaskDefinitionsInput } from './workflow-create-without-task-definitions.input';

@InputType()
export class WorkflowCreateOrConnectWithoutTaskDefinitionsInput {

    @Field(() => WorkflowWhereUniqueInput, {nullable:false})
    @Type(() => WorkflowWhereUniqueInput)
    where!: WorkflowWhereUniqueInput;

    @Field(() => WorkflowCreateWithoutTaskDefinitionsInput, {nullable:false})
    @Type(() => WorkflowCreateWithoutTaskDefinitionsInput)
    create!: WorkflowCreateWithoutTaskDefinitionsInput;
}
