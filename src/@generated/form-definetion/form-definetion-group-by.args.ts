import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormDefinetionWhereInput } from './form-definetion-where.input';
import { Type } from 'class-transformer';
import { FormDefinetionOrderByWithAggregationInput } from './form-definetion-order-by-with-aggregation.input';
import { FormDefinetionScalarFieldEnum } from './form-definetion-scalar-field.enum';
import { FormDefinetionScalarWhereWithAggregatesInput } from './form-definetion-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FormDefinetionCountAggregateInput } from './form-definetion-count-aggregate.input';
import { FormDefinetionAvgAggregateInput } from './form-definetion-avg-aggregate.input';
import { FormDefinetionSumAggregateInput } from './form-definetion-sum-aggregate.input';
import { FormDefinetionMinAggregateInput } from './form-definetion-min-aggregate.input';
import { FormDefinetionMaxAggregateInput } from './form-definetion-max-aggregate.input';

@ArgsType()
export class FormDefinetionGroupByArgs {

    @Field(() => FormDefinetionWhereInput, {nullable:true})
    @Type(() => FormDefinetionWhereInput)
    where?: FormDefinetionWhereInput;

    @Field(() => [FormDefinetionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FormDefinetionOrderByWithAggregationInput>;

    @Field(() => [FormDefinetionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FormDefinetionScalarFieldEnum>;

    @Field(() => FormDefinetionScalarWhereWithAggregatesInput, {nullable:true})
    having?: FormDefinetionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FormDefinetionCountAggregateInput, {nullable:true})
    _count?: FormDefinetionCountAggregateInput;

    @Field(() => FormDefinetionAvgAggregateInput, {nullable:true})
    _avg?: FormDefinetionAvgAggregateInput;

    @Field(() => FormDefinetionSumAggregateInput, {nullable:true})
    _sum?: FormDefinetionSumAggregateInput;

    @Field(() => FormDefinetionMinAggregateInput, {nullable:true})
    _min?: FormDefinetionMinAggregateInput;

    @Field(() => FormDefinetionMaxAggregateInput, {nullable:true})
    _max?: FormDefinetionMaxAggregateInput;
}
