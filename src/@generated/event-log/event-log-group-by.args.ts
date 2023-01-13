import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventLogWhereInput } from './event-log-where.input';
import { Type } from 'class-transformer';
import { EventLogOrderByWithAggregationInput } from './event-log-order-by-with-aggregation.input';
import { EventLogScalarFieldEnum } from './event-log-scalar-field.enum';
import { EventLogScalarWhereWithAggregatesInput } from './event-log-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EventLogCountAggregateInput } from './event-log-count-aggregate.input';
import { EventLogAvgAggregateInput } from './event-log-avg-aggregate.input';
import { EventLogSumAggregateInput } from './event-log-sum-aggregate.input';
import { EventLogMinAggregateInput } from './event-log-min-aggregate.input';
import { EventLogMaxAggregateInput } from './event-log-max-aggregate.input';

@ArgsType()
export class EventLogGroupByArgs {

    @Field(() => EventLogWhereInput, {nullable:true})
    @Type(() => EventLogWhereInput)
    where?: EventLogWhereInput;

    @Field(() => [EventLogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EventLogOrderByWithAggregationInput>;

    @Field(() => [EventLogScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EventLogScalarFieldEnum>;

    @Field(() => EventLogScalarWhereWithAggregatesInput, {nullable:true})
    having?: EventLogScalarWhereWithAggregatesInput;

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
