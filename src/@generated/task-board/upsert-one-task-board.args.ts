import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateInput } from './task-board-create.input';
import { TaskBoardUpdateInput } from './task-board-update.input';

@ArgsType()
export class UpsertOneTaskBoardArgs {

    @Field(() => TaskBoardWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardWhereUniqueInput)
    where!: TaskBoardWhereUniqueInput;

    @Field(() => TaskBoardCreateInput, {nullable:false})
    @Type(() => TaskBoardCreateInput)
    create!: TaskBoardCreateInput;

    @Field(() => TaskBoardUpdateInput, {nullable:false})
    @Type(() => TaskBoardUpdateInput)
    update!: TaskBoardUpdateInput;
}
