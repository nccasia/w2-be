import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardSettingsWhereInput } from './task-board-settings-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTaskBoardSettingsArgs {

    @Field(() => TaskBoardSettingsWhereInput, {nullable:true})
    @Type(() => TaskBoardSettingsWhereInput)
    where?: TaskBoardSettingsWhereInput;
}
