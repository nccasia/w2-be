import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActionCountAggregate } from './action-count-aggregate.output';
import { ActionAvgAggregate } from './action-avg-aggregate.output';
import { ActionSumAggregate } from './action-sum-aggregate.output';
import { ActionMinAggregate } from './action-min-aggregate.output';
import { ActionMaxAggregate } from './action-max-aggregate.output';

@ObjectType()
export class AggregateAction {

    @Field(() => ActionCountAggregate, {nullable:true})
    _count?: ActionCountAggregate;

    @Field(() => ActionAvgAggregate, {nullable:true})
    _avg?: ActionAvgAggregate;

    @Field(() => ActionSumAggregate, {nullable:true})
    _sum?: ActionSumAggregate;

    @Field(() => ActionMinAggregate, {nullable:true})
    _min?: ActionMinAggregate;

    @Field(() => ActionMaxAggregate, {nullable:true})
    _max?: ActionMaxAggregate;
}
