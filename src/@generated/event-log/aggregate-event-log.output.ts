import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventLogCountAggregate } from './event-log-count-aggregate.output';
import { EventLogAvgAggregate } from './event-log-avg-aggregate.output';
import { EventLogSumAggregate } from './event-log-sum-aggregate.output';
import { EventLogMinAggregate } from './event-log-min-aggregate.output';
import { EventLogMaxAggregate } from './event-log-max-aggregate.output';

@ObjectType()
export class AggregateEventLog {

    @Field(() => EventLogCountAggregate, {nullable:true})
    _count?: EventLogCountAggregate;

    @Field(() => EventLogAvgAggregate, {nullable:true})
    _avg?: EventLogAvgAggregate;

    @Field(() => EventLogSumAggregate, {nullable:true})
    _sum?: EventLogSumAggregate;

    @Field(() => EventLogMinAggregate, {nullable:true})
    _min?: EventLogMinAggregate;

    @Field(() => EventLogMaxAggregate, {nullable:true})
    _max?: EventLogMaxAggregate;
}
