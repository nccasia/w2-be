import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardWhereInput } from './task-board-where.input';

@InputType()
export class TaskBoardRelationFilter {

    @Field(() => TaskBoardWhereInput, {nullable:true})
    is?: TaskBoardWhereInput;

    @Field(() => TaskBoardWhereInput, {nullable:true})
    isNot?: TaskBoardWhereInput;
}
