import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TriggerCountAggregate } from './trigger-count-aggregate.output';
import { TriggerAvgAggregate } from './trigger-avg-aggregate.output';
import { TriggerSumAggregate } from './trigger-sum-aggregate.output';
import { TriggerMinAggregate } from './trigger-min-aggregate.output';
import { TriggerMaxAggregate } from './trigger-max-aggregate.output';

@ObjectType()
export class AggregateTrigger {

    @Field(() => TriggerCountAggregate, {nullable:true})
    _count?: TriggerCountAggregate;

    @Field(() => TriggerAvgAggregate, {nullable:true})
    _avg?: TriggerAvgAggregate;

    @Field(() => TriggerSumAggregate, {nullable:true})
    _sum?: TriggerSumAggregate;

    @Field(() => TriggerMinAggregate, {nullable:true})
    _min?: TriggerMinAggregate;

    @Field(() => TriggerMaxAggregate, {nullable:true})
    _max?: TriggerMaxAggregate;
}
