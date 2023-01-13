import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TaskDefinitionCountAggregate } from './task-definition-count-aggregate.output';
import { TaskDefinitionAvgAggregate } from './task-definition-avg-aggregate.output';
import { TaskDefinitionSumAggregate } from './task-definition-sum-aggregate.output';
import { TaskDefinitionMinAggregate } from './task-definition-min-aggregate.output';
import { TaskDefinitionMaxAggregate } from './task-definition-max-aggregate.output';

@ObjectType()
export class AggregateTaskDefinition {

    @Field(() => TaskDefinitionCountAggregate, {nullable:true})
    _count?: TaskDefinitionCountAggregate;

    @Field(() => TaskDefinitionAvgAggregate, {nullable:true})
    _avg?: TaskDefinitionAvgAggregate;

    @Field(() => TaskDefinitionSumAggregate, {nullable:true})
    _sum?: TaskDefinitionSumAggregate;

    @Field(() => TaskDefinitionMinAggregate, {nullable:true})
    _min?: TaskDefinitionMinAggregate;

    @Field(() => TaskDefinitionMaxAggregate, {nullable:true})
    _max?: TaskDefinitionMaxAggregate;
}
