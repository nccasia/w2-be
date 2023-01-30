import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardSettingsWhereUniqueInput } from './task-board-settings-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardSettingsCreateWithoutTaskBoardInput } from './task-board-settings-create-without-task-board.input';

@InputType()
export class TaskBoardSettingsCreateOrConnectWithoutTaskBoardInput {

    @Field(() => TaskBoardSettingsWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardSettingsWhereUniqueInput)
    where!: TaskBoardSettingsWhereUniqueInput;

    @Field(() => TaskBoardSettingsCreateWithoutTaskBoardInput, {nullable:false})
    @Type(() => TaskBoardSettingsCreateWithoutTaskBoardInput)
    create!: TaskBoardSettingsCreateWithoutTaskBoardInput;
}
