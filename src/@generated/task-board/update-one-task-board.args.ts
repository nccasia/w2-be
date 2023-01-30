import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardUpdateInput } from './task-board-update.input';
import { Type } from 'class-transformer';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';

@ArgsType()
export class UpdateOneTaskBoardArgs {

    @Field(() => TaskBoardUpdateInput, {nullable:false})
    @Type(() => TaskBoardUpdateInput)
    data!: TaskBoardUpdateInput;

    @Field(() => TaskBoardWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardWhereUniqueInput)
    where!: TaskBoardWhereUniqueInput;
}
