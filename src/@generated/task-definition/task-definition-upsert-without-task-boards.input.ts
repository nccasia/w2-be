import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionUpdateWithoutTaskBoardsInput } from './task-definition-update-without-task-boards.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutTaskBoardsInput } from './task-definition-create-without-task-boards.input';

@InputType()
export class TaskDefinitionUpsertWithoutTaskBoardsInput {

    @Field(() => TaskDefinitionUpdateWithoutTaskBoardsInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutTaskBoardsInput)
    update!: TaskDefinitionUpdateWithoutTaskBoardsInput;

    @Field(() => TaskDefinitionCreateWithoutTaskBoardsInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutTaskBoardsInput)
    create!: TaskDefinitionCreateWithoutTaskBoardsInput;
}
