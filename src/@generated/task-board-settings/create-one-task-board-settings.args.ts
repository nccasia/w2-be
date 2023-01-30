import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardSettingsCreateInput } from './task-board-settings-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTaskBoardSettingsArgs {

    @Field(() => TaskBoardSettingsCreateInput, {nullable:false})
    @Type(() => TaskBoardSettingsCreateInput)
    data!: TaskBoardSettingsCreateInput;
}
