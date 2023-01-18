import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionCountAggregate } from './task-definition-activity-definition-count-aggregate.output';
import { TaskDefinitionActivityDefinitionAvgAggregate } from './task-definition-activity-definition-avg-aggregate.output';
import { TaskDefinitionActivityDefinitionSumAggregate } from './task-definition-activity-definition-sum-aggregate.output';
import { TaskDefinitionActivityDefinitionMinAggregate } from './task-definition-activity-definition-min-aggregate.output';
import { TaskDefinitionActivityDefinitionMaxAggregate } from './task-definition-activity-definition-max-aggregate.output';

@ObjectType()
export class AggregateTaskDefinitionActivityDefinition {

    @Field(() => TaskDefinitionActivityDefinitionCountAggregate, {nullable:true})
    _count?: TaskDefinitionActivityDefinitionCountAggregate;

    @Field(() => TaskDefinitionActivityDefinitionAvgAggregate, {nullable:true})
    _avg?: TaskDefinitionActivityDefinitionAvgAggregate;

    @Field(() => TaskDefinitionActivityDefinitionSumAggregate, {nullable:true})
    _sum?: TaskDefinitionActivityDefinitionSumAggregate;

    @Field(() => TaskDefinitionActivityDefinitionMinAggregate, {nullable:true})
    _min?: TaskDefinitionActivityDefinitionMinAggregate;

    @Field(() => TaskDefinitionActivityDefinitionMaxAggregate, {nullable:true})
    _max?: TaskDefinitionActivityDefinitionMaxAggregate;
}
