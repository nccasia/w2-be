import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionUpdateWithoutProjectsInput } from './task-definition-update-without-projects.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutProjectsInput } from './task-definition-create-without-projects.input';

@InputType()
export class TaskDefinitionUpsertWithoutProjectsInput {

    @Field(() => TaskDefinitionUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutProjectsInput)
    update!: TaskDefinitionUpdateWithoutProjectsInput;

    @Field(() => TaskDefinitionCreateWithoutProjectsInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutProjectsInput)
    create!: TaskDefinitionCreateWithoutProjectsInput;
}
