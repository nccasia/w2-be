import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionUpdateWithoutWorkflowInput } from './task-definition-update-without-workflow.input';

@InputType()
export class TaskDefinitionUpdateWithWhereUniqueWithoutWorkflowInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutWorkflowInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutWorkflowInput)
    data!: TaskDefinitionUpdateWithoutWorkflowInput;
}
