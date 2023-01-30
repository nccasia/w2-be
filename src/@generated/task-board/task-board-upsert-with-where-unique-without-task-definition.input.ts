import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardUpdateWithoutTaskDefinitionInput } from './task-board-update-without-task-definition.input';
import { TaskBoardCreateWithoutTaskDefinitionInput } from './task-board-create-without-task-definition.input';

@InputType()
export class TaskBoardUpsertWithWhereUniqueWithoutTaskDefinitionInput {

    @Field(() => TaskBoardWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardWhereUniqueInput)
    where!: TaskBoardWhereUniqueInput;

    @Field(() => TaskBoardUpdateWithoutTaskDefinitionInput, {nullable:false})
    @Type(() => TaskBoardUpdateWithoutTaskDefinitionInput)
    update!: TaskBoardUpdateWithoutTaskDefinitionInput;

    @Field(() => TaskBoardCreateWithoutTaskDefinitionInput, {nullable:false})
    @Type(() => TaskBoardCreateWithoutTaskDefinitionInput)
    create!: TaskBoardCreateWithoutTaskDefinitionInput;
}
