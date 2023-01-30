import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardWhereInput } from './task-board-where.input';
import { Type } from 'class-transformer';
import { TaskBoardOrderByWithRelationInput } from './task-board-order-by-with-relation.input';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TaskBoardCountAggregateInput } from './task-board-count-aggregate.input';
import { TaskBoardAvgAggregateInput } from './task-board-avg-aggregate.input';
import { TaskBoardSumAggregateInput } from './task-board-sum-aggregate.input';
import { TaskBoardMinAggregateInput } from './task-board-min-aggregate.input';
import { TaskBoardMaxAggregateInput } from './task-board-max-aggregate.input';

@ArgsType()
export class TaskBoardAggregateArgs {

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

    @Field(() => TaskBoardCountAggregateInput, {nullable:true})
    _count?: TaskBoardCountAggregateInput;

    @Field(() => TaskBoardAvgAggregateInput, {nullable:true})
    _avg?: TaskBoardAvgAggregateInput;

    @Field(() => TaskBoardSumAggregateInput, {nullable:true})
    _sum?: TaskBoardSumAggregateInput;

    @Field(() => TaskBoardMinAggregateInput, {nullable:true})
    _min?: TaskBoardMinAggregateInput;

    @Field(() => TaskBoardMaxAggregateInput, {nullable:true})
    _max?: TaskBoardMaxAggregateInput;
}
