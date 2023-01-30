import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardWhereInput } from './task-board-where.input';
import { Type } from 'class-transformer';
import { TaskBoardOrderByWithRelationInput } from './task-board-order-by-with-relation.input';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TaskBoardScalarFieldEnum } from './task-board-scalar-field.enum';

@ArgsType()
export class FindFirstTaskBoardOrThrowArgs {

    @Field(() => TaskBoardWhereInput, {nullable:true})
    @Type(() => TaskBoardWhereInput)
    where?: TaskBoardWhereInput;

    @Field(() => [TaskBoardOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TaskBoardOrderByWithRelationInput>;

    @Field(() => TaskBoardWhereUniqueInput, {nullable:true})
    cursor?: TaskBoardWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TaskBoardScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TaskBoardScalarFieldEnum>;
}
