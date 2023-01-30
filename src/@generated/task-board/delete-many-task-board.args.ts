import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardWhereInput } from './task-board-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTaskBoardArgs {

    @Field(() => TaskBoardWhereInput, {nullable:true})
    @Type(() => TaskBoardWhereInput)
    where?: TaskBoardWhereInput;
}
