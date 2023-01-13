import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormWhereInput } from './form-where.input';
import { Type } from 'class-transformer';
import { FormOrderByWithAggregationInput } from './form-order-by-with-aggregation.input';
import { FormScalarFieldEnum } from './form-scalar-field.enum';
import { FormScalarWhereWithAggregatesInput } from './form-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FormCountAggregateInput } from './form-count-aggregate.input';
import { FormAvgAggregateInput } from './form-avg-aggregate.input';
import { FormSumAggregateInput } from './form-sum-aggregate.input';
import { FormMinAggregateInput } from './form-min-aggregate.input';
import { FormMaxAggregateInput } from './form-max-aggregate.input';

@ArgsType()
export class FormGroupByArgs {

    @Field(() => FormWhereInput, {nullable:true})
    @Type(() => FormWhereInput)
    where?: FormWhereInput;

    @Field(() => [FormOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FormOrderByWithAggregationInput>;

    @Field(() => [FormScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FormScalarFieldEnum>;

    @Field(() => FormScalarWhereWithAggregatesInput, {nullable:true})
    having?: FormScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FormCountAggregateInput, {nullable:true})
    _count?: FormCountAggregateInput;

    @Field(() => FormAvgAggregateInput, {nullable:true})
    _avg?: FormAvgAggregateInput;

    @Field(() => FormSumAggregateInput, {nullable:true})
    _sum?: FormSumAggregateInput;

    @Field(() => FormMinAggregateInput, {nullable:true})
    _min?: FormMinAggregateInput;

    @Field(() => FormMaxAggregateInput, {nullable:true})
    _max?: FormMaxAggregateInput;
}
