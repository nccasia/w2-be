import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardUpdateWithoutTaskDefinitionInput } from './task-board-update-without-task-definition.input';

@InputType()
export class TaskBoardUpdateWithWhereUniqueWithoutTaskDefinitionInput {

    @Field(() => TaskBoardWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardWhereUniqueInput)
    where!: TaskBoardWhereUniqueInput;

    @Field(() => TaskBoardUpdateWithoutTaskDefinitionInput, {nullable:false})
    @Type(() => TaskBoardUpdateWithoutTaskDefinitionInput)
    data!: TaskBoardUpdateWithoutTaskDefinitionInput;
}
