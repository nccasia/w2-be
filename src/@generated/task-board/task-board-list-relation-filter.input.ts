import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardWhereInput } from './task-board-where.input';

@InputType()
export class TaskBoardListRelationFilter {

    @Field(() => TaskBoardWhereInput, {nullable:true})
    every?: TaskBoardWhereInput;

    @Field(() => TaskBoardWhereInput, {nullable:true})
    some?: TaskBoardWhereInput;

    @Field(() => TaskBoardWhereInput, {nullable:true})
    none?: TaskBoardWhereInput;
}
