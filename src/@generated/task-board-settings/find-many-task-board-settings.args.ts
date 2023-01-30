import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardSettingsWhereInput } from './task-board-settings-where.input';
import { Type } from 'class-transformer';
import { TaskBoardSettingsOrderByWithRelationInput } from './task-board-settings-order-by-with-relation.input';
import { TaskBoardSettingsWhereUniqueInput } from './task-board-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TaskBoardSettingsScalarFieldEnum } from './task-board-settings-scalar-field.enum';

@ArgsType()
export class FindManyTaskBoardSettingsArgs {

    @Field(() => TaskBoardSettingsWhereInput, {nullable:true})
    @Type(() => TaskBoardSettingsWhereInput)
    where?: TaskBoardSettingsWhereInput;

    @Field(() => [TaskBoardSettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TaskBoardSettingsOrderByWithRelationInput>;

    @Field(() => TaskBoardSettingsWhereUniqueInput, {nullable:true})
    cursor?: TaskBoardSettingsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TaskBoardSettingsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TaskBoardSettingsScalarFieldEnum>;
}
