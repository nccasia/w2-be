import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput } from './task-definition-activity-definition-create-without-task-definition.input';

@InputType()
export class TaskDefinitionActivityDefinitionCreateOrConnectWithoutTaskDefinitionInput {

    @Field(() => TaskDefinitionActivityDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    where!: TaskDefinitionActivityDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput)
    create!: TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput;
}
