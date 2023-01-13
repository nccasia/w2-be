import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionUpdateWithoutSubTaskDefinitionsInput } from './task-definition-update-without-sub-task-definitions.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutSubTaskDefinitionsInput } from './task-definition-create-without-sub-task-definitions.input';

@InputType()
export class TaskDefinitionUpsertWithoutSubTaskDefinitionsInput {

    @Field(() => TaskDefinitionUpdateWithoutSubTaskDefinitionsInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutSubTaskDefinitionsInput)
    update!: TaskDefinitionUpdateWithoutSubTaskDefinitionsInput;

    @Field(() => TaskDefinitionCreateWithoutSubTaskDefinitionsInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutSubTaskDefinitionsInput)
    create!: TaskDefinitionCreateWithoutSubTaskDefinitionsInput;
}
