import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ResourceItemWhereInput } from './resource-item-where.input';
import { Type } from 'class-transformer';
import { ResourceItemOrderByWithAggregationInput } from './resource-item-order-by-with-aggregation.input';
import { ResourceItemScalarFieldEnum } from './resource-item-scalar-field.enum';
import { ResourceItemScalarWhereWithAggregatesInput } from './resource-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ResourceItemCountAggregateInput } from './resource-item-count-aggregate.input';
import { ResourceItemAvgAggregateInput } from './resource-item-avg-aggregate.input';
import { ResourceItemSumAggregateInput } from './resource-item-sum-aggregate.input';
import { ResourceItemMinAggregateInput } from './resource-item-min-aggregate.input';
import { ResourceItemMaxAggregateInput } from './resource-item-max-aggregate.input';

@ArgsType()
export class ResourceItemGroupByArgs {

    @Field(() => ResourceItemWhereInput, {nullable:true})
    @Type(() => ResourceItemWhereInput)
    where?: ResourceItemWhereInput;

    @Field(() => [ResourceItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ResourceItemOrderByWithAggregationInput>;

    @Field(() => [ResourceItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ResourceItemScalarFieldEnum>;

    @Field(() => ResourceItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: ResourceItemScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ResourceItemCountAggregateInput, {nullable:true})
    _count?: ResourceItemCountAggregateInput;

    @Field(() => ResourceItemAvgAggregateInput, {nullable:true})
    _avg?: ResourceItemAvgAggregateInput;

    @Field(() => ResourceItemSumAggregateInput, {nullable:true})
    _sum?: ResourceItemSumAggregateInput;

    @Field(() => ResourceItemMinAggregateInput, {nullable:true})
    _min?: ResourceItemMinAggregateInput;

    @Field(() => ResourceItemMaxAggregateInput, {nullable:true})
    _max?: ResourceItemMaxAggregateInput;
}
