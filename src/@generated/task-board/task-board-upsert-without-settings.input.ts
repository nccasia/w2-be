import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardUpdateWithoutSettingsInput } from './task-board-update-without-settings.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateWithoutSettingsInput } from './task-board-create-without-settings.input';

@InputType()
export class TaskBoardUpsertWithoutSettingsInput {

    @Field(() => TaskBoardUpdateWithoutSettingsInput, {nullable:false})
    @Type(() => TaskBoardUpdateWithoutSettingsInput)
    update!: TaskBoardUpdateWithoutSettingsInput;

    @Field(() => TaskBoardCreateWithoutSettingsInput, {nullable:false})
    @Type(() => TaskBoardCreateWithoutSettingsInput)
    create!: TaskBoardCreateWithoutSettingsInput;
}
