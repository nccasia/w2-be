import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutTaskBoardsInput } from './task-definition-create-without-task-boards.input';

@InputType()
export class TaskDefinitionCreateOrConnectWithoutTaskBoardsInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionCreateWithoutTaskBoardsInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutTaskBoardsInput)
    create!: TaskDefinitionCreateWithoutTaskBoardsInput;
}
