import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionUpdateWithoutTaskDefinitionInput } from './task-definition-activity-definition-update-without-task-definition.input';
import { TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput } from './task-definition-activity-definition-create-without-task-definition.input';

@InputType()
export class TaskDefinitionActivityDefinitionUpsertWithWhereUniqueWithoutTaskDefinitionInput {

    @Field(() => TaskDefinitionActivityDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    where!: TaskDefinitionActivityDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionActivityDefinitionUpdateWithoutTaskDefinitionInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionUpdateWithoutTaskDefinitionInput)
    update!: TaskDefinitionActivityDefinitionUpdateWithoutTaskDefinitionInput;

    @Field(() => TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput)
    create!: TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput;
}
