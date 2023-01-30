import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutProjectsInput } from './task-definition-create-without-projects.input';

@InputType()
export class TaskDefinitionCreateOrConnectWithoutProjectsInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionCreateWithoutProjectsInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutProjectsInput)
    create!: TaskDefinitionCreateWithoutProjectsInput;
}
