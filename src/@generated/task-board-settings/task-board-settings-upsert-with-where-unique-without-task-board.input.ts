import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardSettingsWhereUniqueInput } from './task-board-settings-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardSettingsUpdateWithoutTaskBoardInput } from './task-board-settings-update-without-task-board.input';
import { TaskBoardSettingsCreateWithoutTaskBoardInput } from './task-board-settings-create-without-task-board.input';

@InputType()
export class TaskBoardSettingsUpsertWithWhereUniqueWithoutTaskBoardInput {

    @Field(() => TaskBoardSettingsWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardSettingsWhereUniqueInput)
    where!: TaskBoardSettingsWhereUniqueInput;

    @Field(() => TaskBoardSettingsUpdateWithoutTaskBoardInput, {nullable:false})
    @Type(() => TaskBoardSettingsUpdateWithoutTaskBoardInput)
    update!: TaskBoardSettingsUpdateWithoutTaskBoardInput;

    @Field(() => TaskBoardSettingsCreateWithoutTaskBoardInput, {nullable:false})
    @Type(() => TaskBoardSettingsCreateWithoutTaskBoardInput)
    create!: TaskBoardSettingsCreateWithoutTaskBoardInput;
}
