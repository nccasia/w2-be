import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TriggerWhereInput } from './trigger-where.input';
import { Type } from 'class-transformer';
import { TriggerOrderByWithAggregationInput } from './trigger-order-by-with-aggregation.input';
import { TriggerScalarFieldEnum } from './trigger-scalar-field.enum';
import { TriggerScalarWhereWithAggregatesInput } from './trigger-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TriggerCountAggregateInput } from './trigger-count-aggregate.input';
import { TriggerAvgAggregateInput } from './trigger-avg-aggregate.input';
import { TriggerSumAggregateInput } from './trigger-sum-aggregate.input';
import { TriggerMinAggregateInput } from './trigger-min-aggregate.input';
import { TriggerMaxAggregateInput } from './trigger-max-aggregate.input';

@ArgsType()
export class TriggerGroupByArgs {

    @Field(() => TriggerWhereInput, {nullable:true})
    @Type(() => TriggerWhereInput)
    where?: TriggerWhereInput;

    @Field(() => [TriggerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TriggerOrderByWithAggregationInput>;

    @Field(() => [TriggerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TriggerScalarFieldEnum>;

    @Field(() => TriggerScalarWhereWithAggregatesInput, {nullable:true})
    having?: TriggerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TriggerCountAggregateInput, {nullable:true})
    _count?: TriggerCountAggregateInput;

    @Field(() => TriggerAvgAggregateInput, {nullable:true})
    _avg?: TriggerAvgAggregateInput;

    @Field(() => TriggerSumAggregateInput, {nullable:true})
    _sum?: TriggerSumAggregateInput;

    @Field(() => TriggerMinAggregateInput, {nullable:true})
    _min?: TriggerMinAggregateInput;

    @Field(() => TriggerMaxAggregateInput, {nullable:true})
    _max?: TriggerMaxAggregateInput;
}
