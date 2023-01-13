import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { WorkflowCountAggregate } from './workflow-count-aggregate.output';
import { WorkflowAvgAggregate } from './workflow-avg-aggregate.output';
import { WorkflowSumAggregate } from './workflow-sum-aggregate.output';
import { WorkflowMinAggregate } from './workflow-min-aggregate.output';
import { WorkflowMaxAggregate } from './workflow-max-aggregate.output';

@ObjectType()
export class WorkflowGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    config!: any;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => WorkflowCountAggregate, {nullable:true})
    _count?: WorkflowCountAggregate;

    @Field(() => WorkflowAvgAggregate, {nullable:true})
    _avg?: WorkflowAvgAggregate;

    @Field(() => WorkflowSumAggregate, {nullable:true})
    _sum?: WorkflowSumAggregate;

    @Field(() => WorkflowMinAggregate, {nullable:true})
    _min?: WorkflowMinAggregate;

    @Field(() => WorkflowMaxAggregate, {nullable:true})
    _max?: WorkflowMaxAggregate;
}
