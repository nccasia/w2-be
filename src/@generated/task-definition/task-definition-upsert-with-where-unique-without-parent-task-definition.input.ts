import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionUpdateWithoutParentTaskDefinitionInput } from './task-definition-update-without-parent-task-definition.input';
import { TaskDefinitionCreateWithoutParentTaskDefinitionInput } from './task-definition-create-without-parent-task-definition.input';

@InputType()
export class TaskDefinitionUpsertWithWhereUniqueWithoutParentTaskDefinitionInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutParentTaskDefinitionInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutParentTaskDefinitionInput)
    update!: TaskDefinitionUpdateWithoutParentTaskDefinitionInput;

    @Field(() => TaskDefinitionCreateWithoutParentTaskDefinitionInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutParentTaskDefinitionInput)
    create!: TaskDefinitionCreateWithoutParentTaskDefinitionInput;
}
