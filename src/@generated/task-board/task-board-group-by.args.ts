import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardWhereInput } from './task-board-where.input';
import { Type } from 'class-transformer';
import { TaskBoardOrderByWithAggregationInput } from './task-board-order-by-with-aggregation.input';
import { TaskBoardScalarFieldEnum } from './task-board-scalar-field.enum';
import { TaskBoardScalarWhereWithAggregatesInput } from './task-board-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TaskBoardCountAggregateInput } from './task-board-count-aggregate.input';
import { TaskBoardAvgAggregateInput } from './task-board-avg-aggregate.input';
import { TaskBoardSumAggregateInput } from './task-board-sum-aggregate.input';
import { TaskBoardMinAggregateInput } from './task-board-min-aggregate.input';
import { TaskBoardMaxAggregateInput } from './task-board-max-aggregate.input';

@ArgsType()
export class TaskBoardGroupByArgs {

    @Field(() => TaskBoardWhereInput, {nullable:true})
    @Type(() => TaskBoardWhereInput)
    where?: TaskBoardWhereInput;

    @Field(() => [TaskBoardOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TaskBoardOrderByWithAggregationInput>;

    @Field(() => [TaskBoardScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TaskBoardScalarFieldEnum>;

    @Field(() => TaskBoardScalarWhereWithAggregatesInput, {nullable:true})
    having?: TaskBoardScalarWhereWithAggregatesInput;

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
