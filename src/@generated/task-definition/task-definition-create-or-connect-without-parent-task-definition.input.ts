import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutParentTaskDefinitionInput } from './task-definition-create-without-parent-task-definition.input';

@InputType()
export class TaskDefinitionCreateOrConnectWithoutParentTaskDefinitionInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionCreateWithoutParentTaskDefinitionInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutParentTaskDefinitionInput)
    create!: TaskDefinitionCreateWithoutParentTaskDefinitionInput;
}
