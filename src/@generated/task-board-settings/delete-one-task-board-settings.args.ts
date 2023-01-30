import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardSettingsWhereUniqueInput } from './task-board-settings-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneTaskBoardSettingsArgs {

    @Field(() => TaskBoardSettingsWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardSettingsWhereUniqueInput)
    where!: TaskBoardSettingsWhereUniqueInput;
}
