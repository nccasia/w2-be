import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutSubTaskDefinitionsInput } from './task-definition-create-without-sub-task-definitions.input';

@InputType()
export class TaskDefinitionCreateOrConnectWithoutSubTaskDefinitionsInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionCreateWithoutSubTaskDefinitionsInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutSubTaskDefinitionsInput)
    create!: TaskDefinitionCreateWithoutSubTaskDefinitionsInput;
}
