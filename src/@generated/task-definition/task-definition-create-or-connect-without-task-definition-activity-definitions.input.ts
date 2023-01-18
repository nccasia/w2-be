import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput } from './task-definition-create-without-task-definition-activity-definitions.input';

@InputType()
export class TaskDefinitionCreateOrConnectWithoutTaskDefinitionActivityDefinitionsInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput)
    create!: TaskDefinitionCreateWithoutTaskDefinitionActivityDefinitionsInput;
}
