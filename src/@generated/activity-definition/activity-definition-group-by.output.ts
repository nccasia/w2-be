import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActivityType } from '../prisma/activity-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ActivityDefinitionCountAggregate } from './activity-definition-count-aggregate.output';
import { ActivityDefinitionAvgAggregate } from './activity-definition-avg-aggregate.output';
import { ActivityDefinitionSumAggregate } from './activity-definition-sum-aggregate.output';
import { ActivityDefinitionMinAggregate } from './activity-definition-min-aggregate.output';
import { ActivityDefinitionMaxAggregate } from './activity-definition-max-aggregate.output';

@ObjectType()
export class ActivityDefinitionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    synchronous!: boolean;

    @Field(() => ActivityType, {nullable:false})
    type!: keyof typeof ActivityType;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    initialValue?: any;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

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
