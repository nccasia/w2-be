import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardSettingsWhereInput } from './task-board-settings-where.input';

@InputType()
export class TaskBoardSettingsListRelationFilter {

    @Field(() => TaskBoardSettingsWhereInput, {nullable:true})
    every?: TaskBoardSettingsWhereInput;

    @Field(() => TaskBoardSettingsWhereInput, {nullable:true})
    some?: TaskBoardSettingsWhereInput;

    @Field(() => TaskBoardSettingsWhereInput, {nullable:true})
    none?: TaskBoardSettingsWhereInput;
}
