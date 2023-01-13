import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TriggerWhereInput } from './trigger-where.input';
import { Type } from 'class-transformer';
import { TriggerOrderByWithRelationInput } from './trigger-order-by-with-relation.input';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TriggerCountAggregateInput } from './trigger-count-aggregate.input';
import { TriggerAvgAggregateInput } from './trigger-avg-aggregate.input';
import { TriggerSumAggregateInput } from './trigger-sum-aggregate.input';
import { TriggerMinAggregateInput } from './trigger-min-aggregate.input';
import { TriggerMaxAggregateInput } from './trigger-max-aggregate.input';

@ArgsType()
export class TriggerAggregateArgs {

    @Field(() => TriggerWhereInput, {nullable:true})
    @Type(() => TriggerWhereInput)
    where?: TriggerWhereInput;

    @Field(() => [TriggerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TriggerOrderByWithRelationInput>;

    @Field(() => TriggerWhereUniqueInput, {nullable:true})
    cursor?: TriggerWhereUniqueInput;

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
