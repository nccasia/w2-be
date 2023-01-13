import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActivityCountAggregate } from './activity-count-aggregate.output';
import { ActivityAvgAggregate } from './activity-avg-aggregate.output';
import { ActivitySumAggregate } from './activity-sum-aggregate.output';
import { ActivityMinAggregate } from './activity-min-aggregate.output';
import { ActivityMaxAggregate } from './activity-max-aggregate.output';

@ObjectType()
export class AggregateActivity {

    @Field(() => ActivityCountAggregate, {nullable:true})
    _count?: ActivityCountAggregate;

    @Field(() => ActivityAvgAggregate, {nullable:true})
    _avg?: ActivityAvgAggregate;

    @Field(() => ActivitySumAggregate, {nullable:true})
    _sum?: ActivitySumAggregate;

    @Field(() => ActivityMinAggregate, {nullable:true})
    _min?: ActivityMinAggregate;

    @Field(() => ActivityMaxAggregate, {nullable:true})
    _max?: ActivityMaxAggregate;
}
