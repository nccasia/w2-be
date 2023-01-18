import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskDefinitionActivityDefinitionCountAggregate } from './task-definition-activity-definition-count-aggregate.output';
import { TaskDefinitionActivityDefinitionAvgAggregate } from './task-definition-activity-definition-avg-aggregate.output';
import { TaskDefinitionActivityDefinitionSumAggregate } from './task-definition-activity-definition-sum-aggregate.output';
import { TaskDefinitionActivityDefinitionMinAggregate } from './task-definition-activity-definition-min-aggregate.output';
import { TaskDefinitionActivityDefinitionMaxAggregate } from './task-definition-activity-definition-max-aggregate.output';

@ObjectType()
export class TaskDefinitionActivityDefinitionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    taskDefinitionId!: number;

    @Field(() => Int, {nullable:false})
    activityDefinitionId!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    initialValue?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
