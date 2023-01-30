import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardSettingsWhereUniqueInput } from './task-board-settings-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardSettingsCreateInput } from './task-board-settings-create.input';
import { TaskBoardSettingsUpdateInput } from './task-board-settings-update.input';

@ArgsType()
export class UpsertOneTaskBoardSettingsArgs {

    @Field(() => TaskBoardSettingsWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardSettingsWhereUniqueInput)
    where!: TaskBoardSettingsWhereUniqueInput;

    @Field(() => TaskBoardSettingsCreateInput, {nullable:false})
    @Type(() => TaskBoardSettingsCreateInput)
    create!: TaskBoardSettingsCreateInput;

    @Field(() => TaskBoardSettingsUpdateInput, {nullable:false})
    @Type(() => TaskBoardSettingsUpdateInput)
    update!: TaskBoardSettingsUpdateInput;
}
