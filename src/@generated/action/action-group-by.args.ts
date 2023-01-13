import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActionWhereInput } from './action-where.input';
import { Type } from 'class-transformer';
import { ActionOrderByWithAggregationInput } from './action-order-by-with-aggregation.input';
import { ActionScalarFieldEnum } from './action-scalar-field.enum';
import { ActionScalarWhereWithAggregatesInput } from './action-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ActionCountAggregateInput } from './action-count-aggregate.input';
import { ActionAvgAggregateInput } from './action-avg-aggregate.input';
import { ActionSumAggregateInput } from './action-sum-aggregate.input';
import { ActionMinAggregateInput } from './action-min-aggregate.input';
import { ActionMaxAggregateInput } from './action-max-aggregate.input';

@ArgsType()
export class ActionGroupByArgs {

    @Field(() => ActionWhereInput, {nullable:true})
    @Type(() => ActionWhereInput)
    where?: ActionWhereInput;

    @Field(() => [ActionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ActionOrderByWithAggregationInput>;

    @Field(() => [ActionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ActionScalarFieldEnum>;

    @Field(() => ActionScalarWhereWithAggregatesInput, {nullable:true})
    having?: ActionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ActionCountAggregateInput, {nullable:true})
    _count?: ActionCountAggregateInput;

    @Field(() => ActionAvgAggregateInput, {nullable:true})
    _avg?: ActionAvgAggregateInput;

    @Field(() => ActionSumAggregateInput, {nullable:true})
    _sum?: ActionSumAggregateInput;

    @Field(() => ActionMinAggregateInput, {nullable:true})
    _min?: ActionMinAggregateInput;

    @Field(() => ActionMaxAggregateInput, {nullable:true})
    _max?: ActionMaxAggregateInput;
}
