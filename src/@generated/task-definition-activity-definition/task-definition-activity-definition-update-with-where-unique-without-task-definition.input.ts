import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionUpdateWithoutTaskDefinitionInput } from './task-definition-activity-definition-update-without-task-definition.input';

@InputType()
export class TaskDefinitionActivityDefinitionUpdateWithWhereUniqueWithoutTaskDefinitionInput {

    @Field(() => TaskDefinitionActivityDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    where!: TaskDefinitionActivityDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionActivityDefinitionUpdateWithoutTaskDefinitionInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionUpdateWithoutTaskDefinitionInput)
    data!: TaskDefinitionActivityDefinitionUpdateWithoutTaskDefinitionInput;
}
