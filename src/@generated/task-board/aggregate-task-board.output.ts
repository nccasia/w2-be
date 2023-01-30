import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TaskBoardCountAggregate } from './task-board-count-aggregate.output';
import { TaskBoardAvgAggregate } from './task-board-avg-aggregate.output';
import { TaskBoardSumAggregate } from './task-board-sum-aggregate.output';
import { TaskBoardMinAggregate } from './task-board-min-aggregate.output';
import { TaskBoardMaxAggregate } from './task-board-max-aggregate.output';

@ObjectType()
export class AggregateTaskBoard {

    @Field(() => TaskBoardCountAggregate, {nullable:true})
    _count?: TaskBoardCountAggregate;

    @Field(() => TaskBoardAvgAggregate, {nullable:true})
    _avg?: TaskBoardAvgAggregate;

    @Field(() => TaskBoardSumAggregate, {nullable:true})
    _sum?: TaskBoardSumAggregate;

    @Field(() => TaskBoardMinAggregate, {nullable:true})
    _min?: TaskBoardMinAggregate;

    @Field(() => TaskBoardMaxAggregate, {nullable:true})
    _max?: TaskBoardMaxAggregate;
}
