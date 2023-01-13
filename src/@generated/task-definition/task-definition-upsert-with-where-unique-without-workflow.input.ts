import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionUpdateWithoutWorkflowInput } from './task-definition-update-without-workflow.input';
import { TaskDefinitionCreateWithoutWorkflowInput } from './task-definition-create-without-workflow.input';

@InputType()
export class TaskDefinitionUpsertWithWhereUniqueWithoutWorkflowInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutWorkflowInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutWorkflowInput)
    update!: TaskDefinitionUpdateWithoutWorkflowInput;

    @Field(() => TaskDefinitionCreateWithoutWorkflowInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutWorkflowInput)
    create!: TaskDefinitionCreateWithoutWorkflowInput;
}
