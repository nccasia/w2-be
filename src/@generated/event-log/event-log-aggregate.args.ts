import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventLogWhereInput } from './event-log-where.input';
import { Type } from 'class-transformer';
import { EventLogOrderByWithRelationInput } from './event-log-order-by-with-relation.input';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventLogCountAggregateInput } from './event-log-count-aggregate.input';
import { EventLogAvgAggregateInput } from './event-log-avg-aggregate.input';
import { EventLogSumAggregateInput } from './event-log-sum-aggregate.input';
import { EventLogMinAggregateInput } from './event-log-min-aggregate.input';
import { EventLogMaxAggregateInput } from './event-log-max-aggregate.input';

@ArgsType()
export class EventLogAggregateArgs {

    @Field(() => EventLogWhereInput, {nullable:true})
    @Type(() => EventLogWhereInput)
    where?: EventLogWhereInput;

    @Field(() => [EventLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventLogOrderByWithRelationInput>;

    @Field(() => EventLogWhereUniqueInput, {nullable:true})
    cursor?: EventLogWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventLogCountAggregateInput, {nullable:true})
    _count?: EventLogCountAggregateInput;

    @Field(() => EventLogAvgAggregateInput, {nullable:true})
    _avg?: EventLogAvgAggregateInput;

    @Field(() => EventLogSumAggregateInput, {nullable:true})
    _sum?: EventLogSumAggregateInput;

    @Field(() => EventLogMinAggregateInput, {nullable:true})
    _min?: EventLogMinAggregateInput;

    @Field(() => EventLogMaxAggregateInput, {nullable:true})
    _max?: EventLogMaxAggregateInput;
}
