import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TriggerType } from '../prisma/trigger-type.enum';
import { TriggerStatus } from '../prisma/trigger-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { TriggerCountAggregate } from './trigger-count-aggregate.output';
import { TriggerAvgAggregate } from './trigger-avg-aggregate.output';
import { TriggerSumAggregate } from './trigger-sum-aggregate.output';
import { TriggerMinAggregate } from './trigger-min-aggregate.output';
import { TriggerMaxAggregate } from './trigger-max-aggregate.output';

@ObjectType()
export class TriggerGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TriggerType, {nullable:false})
    type!: keyof typeof TriggerType;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => TriggerStatus, {nullable:false})
    status!: keyof typeof TriggerStatus;

    @Field(() => Int, {nullable:true})
    taskId?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    value?: any;

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
