import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardSettingsUpdateInput } from './task-board-settings-update.input';
import { Type } from 'class-transformer';
import { TaskBoardSettingsWhereUniqueInput } from './task-board-settings-where-unique.input';

@ArgsType()
export class UpdateOneTaskBoardSettingsArgs {

    @Field(() => TaskBoardSettingsUpdateInput, {nullable:false})
    @Type(() => TaskBoardSettingsUpdateInput)
    data!: TaskBoardSettingsUpdateInput;

    @Field(() => TaskBoardSettingsWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardSettingsWhereUniqueInput)
    where!: TaskBoardSettingsWhereUniqueInput;
}
