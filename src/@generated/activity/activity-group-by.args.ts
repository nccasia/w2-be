import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityWhereInput } from './activity-where.input';
import { Type } from 'class-transformer';
import { ActivityOrderByWithAggregationInput } from './activity-order-by-with-aggregation.input';
import { ActivityScalarFieldEnum } from './activity-scalar-field.enum';
import { ActivityScalarWhereWithAggregatesInput } from './activity-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ActivityCountAggregateInput } from './activity-count-aggregate.input';
import { ActivityAvgAggregateInput } from './activity-avg-aggregate.input';
import { ActivitySumAggregateInput } from './activity-sum-aggregate.input';
import { ActivityMinAggregateInput } from './activity-min-aggregate.input';
import { ActivityMaxAggregateInput } from './activity-max-aggregate.input';

@ArgsType()
export class ActivityGroupByArgs {

    @Field(() => ActivityWhereInput, {nullable:true})
    @Type(() => ActivityWhereInput)
    where?: ActivityWhereInput;

    @Field(() => [ActivityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ActivityOrderByWithAggregationInput>;

    @Field(() => [ActivityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ActivityScalarFieldEnum>;

    @Field(() => ActivityScalarWhereWithAggregatesInput, {nullable:true})
    having?: ActivityScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ActivityCountAggregateInput, {nullable:true})
    _count?: ActivityCountAggregateInput;

    @Field(() => ActivityAvgAggregateInput, {nullable:true})
    _avg?: ActivityAvgAggregateInput;

    @Field(() => ActivitySumAggregateInput, {nullable:true})
    _sum?: ActivitySumAggregateInput;

    @Field(() => ActivityMinAggregateInput, {nullable:true})
    _min?: ActivityMinAggregateInput;

    @Field(() => ActivityMaxAggregateInput, {nullable:true})
    _max?: ActivityMaxAggregateInput;
}
