import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActivityDefinitionCountAggregate } from './activity-definition-count-aggregate.output';
import { ActivityDefinitionAvgAggregate } from './activity-definition-avg-aggregate.output';
import { ActivityDefinitionSumAggregate } from './activity-definition-sum-aggregate.output';
import { ActivityDefinitionMinAggregate } from './activity-definition-min-aggregate.output';
import { ActivityDefinitionMaxAggregate } from './activity-definition-max-aggregate.output';

@ObjectType()
export class AggregateActivityDefinition {

    @Field(() => ActivityDefinitionCountAggregate, {nullable:true})
    _count?: ActivityDefinitionCountAggregate;

    @Field(() => ActivityDefinitionAvgAggregate, {nullable:true})
    _avg?: ActivityDefinitionAvgAggregate;

    @Field(() => ActivityDefinitionSumAggregate, {nullable:true})
    _sum?: ActivityDefinitionSumAggregate;

    @Field(() => ActivityDefinitionMinAggregate, {nullable:true})
    _min?: ActivityDefinitionMinAggregate;

    @Field(() => ActivityDefinitionMaxAggregate, {nullable:true})
    _max?: ActivityDefinitionMaxAggregate;
}
