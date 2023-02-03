import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskDefinitionCountAggregate } from './task-definition-count-aggregate.output';
import { TaskDefinitionAvgAggregate } from './task-definition-avg-aggregate.output';
import { TaskDefinitionSumAggregate } from './task-definition-sum-aggregate.output';
import { TaskDefinitionMinAggregate } from './task-definition-min-aggregate.output';
import { TaskDefinitionMaxAggregate } from './task-definition-max-aggregate.output';

@ObjectType()
export class TaskDefinitionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    keyTemplate?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => String, {nullable:false})
    thumbnail!: string;

    @Field(() => Int, {nullable:true})
    formId?: number;

    @Field(() => String, {nullable:true})
    descriptionTemplate?: string;

    @Field(() => String, {nullable:true})
    titleTemplate?: string;

    @Field(() => String, {nullable:true})
    statusTemplate?: string;

    @Field(() => String, {nullable:true})
    stateTemplate?: string;

    @Field(() => String, {nullable:true})
    notificationTemplate?: string;

    @Field(() => String, {nullable:true})
    ctaTemplate?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    machineConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    contextConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    stateConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    statusConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    notificationConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    processConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    triggerConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    ctaConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => Int, {nullable:true})
    parentId?: number;

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
