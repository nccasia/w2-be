import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateWithoutTaskDefinitionInput } from './task-board-create-without-task-definition.input';

@InputType()
export class TaskBoardCreateOrConnectWithoutTaskDefinitionInput {

    @Field(() => TaskBoardWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardWhereUniqueInput)
    where!: TaskBoardWhereUniqueInput;

    @Field(() => TaskBoardCreateWithoutTaskDefinitionInput, {nullable:false})
    @Type(() => TaskBoardCreateWithoutTaskDefinitionInput)
    create!: TaskBoardCreateWithoutTaskDefinitionInput;
}
