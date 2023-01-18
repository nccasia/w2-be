import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput } from './task-definition-update-without-task-definition-activity-definitions.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput } from './task-definition-create-without-task-definition-activity-definitions.input';

@InputType()
export class TaskDefinitionUpsertWithoutTaskDefinitionActivityDefinitionsInput {

    @Field(() => TaskDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput)
    update!: TaskDefinitionUpdateWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput)
    create!: TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput;
}
