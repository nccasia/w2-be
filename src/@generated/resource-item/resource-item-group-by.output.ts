import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ResourceItemCountAggregate } from './resource-item-count-aggregate.output';
import { ResourceItemAvgAggregate } from './resource-item-avg-aggregate.output';
import { ResourceItemSumAggregate } from './resource-item-sum-aggregate.output';
import { ResourceItemMinAggregate } from './resource-item-min-aggregate.output';
import { ResourceItemMaxAggregate } from './resource-item-max-aggregate.output';

@ObjectType()
export class ResourceItemGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    resourceId!: number;

    @Field(() => ResourceItemCountAggregate, {nullable:true})
    _count?: ResourceItemCountAggregate;

    @Field(() => ResourceItemAvgAggregate, {nullable:true})
    _avg?: ResourceItemAvgAggregate;

    @Field(() => ResourceItemSumAggregate, {nullable:true})
    _sum?: ResourceItemSumAggregate;

    @Field(() => ResourceItemMinAggregate, {nullable:true})
    _min?: ResourceItemMinAggregate;

    @Field(() => ResourceItemMaxAggregate, {nullable:true})
    _max?: ResourceItemMaxAggregate;
}
