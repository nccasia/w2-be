import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardSettingsCreateManyTaskBoardInput } from './task-board-settings-create-many-task-board.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskBoardSettingsCreateManyTaskBoardInputEnvelope {

    @Field(() => [TaskBoardSettingsCreateManyTaskBoardInput], {nullable:false})
    @Type(() => TaskBoardSettingsCreateManyTaskBoardInput)
    data!: Array<TaskBoardSettingsCreateManyTaskBoardInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
