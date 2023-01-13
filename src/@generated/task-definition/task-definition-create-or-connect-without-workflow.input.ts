import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutWorkflowInput } from './task-definition-create-without-workflow.input';

@InputType()
export class TaskDefinitionCreateOrConnectWithoutWorkflowInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionCreateWithoutWorkflowInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutWorkflowInput)
    create!: TaskDefinitionCreateWithoutWorkflowInput;
}
