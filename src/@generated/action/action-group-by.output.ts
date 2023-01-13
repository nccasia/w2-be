import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActionType } from '../prisma/action-type.enum';
import { ActionCountAggregate } from './action-count-aggregate.output';
import { ActionAvgAggregate } from './action-avg-aggregate.output';
import { ActionSumAggregate } from './action-sum-aggregate.output';
import { ActionMinAggregate } from './action-min-aggregate.output';
import { ActionMaxAggregate } from './action-max-aggregate.output';

@ObjectType()
export class ActionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => ActionType, {nullable:false})
    type!: keyof typeof ActionType;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:false})
    intent!: string;

    @Field(() => String, {nullable:false})
    domain!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => ActionCountAggregate, {nullable:true})
    _count?: ActionCountAggregate;

    @Field(() => ActionAvgAggregate, {nullable:true})
    _avg?: ActionAvgAggregate;

    @Field(() => ActionSumAggregate, {nullable:true})
    _sum?: ActionSumAggregate;

    @Field(() => ActionMinAggregate, {nullable:true})
    _min?: ActionMinAggregate;

    @Field(() => ActionMaxAggregate, {nullable:true})
    _max?: ActionMaxAggregate;
}
