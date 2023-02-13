import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { EventLogCountAggregate } from './event-log-count-aggregate.output';
import { EventLogAvgAggregate } from './event-log-avg-aggregate.output';
import { EventLogSumAggregate } from './event-log-sum-aggregate.output';
import { EventLogMinAggregate } from './event-log-min-aggregate.output';
import { EventLogMaxAggregate } from './event-log-max-aggregate.output';

@ObjectType()
export class EventLogGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    taskId?: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    context?: any;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => String, {nullable:true})
    domain?: string;

    @Field(() => String, {nullable:true})
    intent?: string;

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
