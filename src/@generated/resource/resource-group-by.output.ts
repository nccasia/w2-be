import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ResourceCountAggregate } from './resource-count-aggregate.output';
import { ResourceAvgAggregate } from './resource-avg-aggregate.output';
import { ResourceSumAggregate } from './resource-sum-aggregate.output';
import { ResourceMinAggregate } from './resource-min-aggregate.output';
import { ResourceMaxAggregate } from './resource-max-aggregate.output';

@ObjectType()
export class ResourceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    icon!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => ResourceCountAggregate, {nullable:true})
    _count?: ResourceCountAggregate;

    @Field(() => ResourceAvgAggregate, {nullable:true})
    _avg?: ResourceAvgAggregate;

    @Field(() => ResourceSumAggregate, {nullable:true})
    _sum?: ResourceSumAggregate;

    @Field(() => ResourceMinAggregate, {nullable:true})
    _min?: ResourceMinAggregate;

    @Field(() => ResourceMaxAggregate, {nullable:true})
    _max?: ResourceMaxAggregate;
}
