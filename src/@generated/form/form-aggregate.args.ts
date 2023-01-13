import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormWhereInput } from './form-where.input';
import { Type } from 'class-transformer';
import { FormOrderByWithRelationInput } from './form-order-by-with-relation.input';
import { FormWhereUniqueInput } from './form-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FormCountAggregateInput } from './form-count-aggregate.input';
import { FormAvgAggregateInput } from './form-avg-aggregate.input';
import { FormSumAggregateInput } from './form-sum-aggregate.input';
import { FormMinAggregateInput } from './form-min-aggregate.input';
import { FormMaxAggregateInput } from './form-max-aggregate.input';

@ArgsType()
export class FormAggregateArgs {

    @Field(() => FormWhereInput, {nullable:true})
    @Type(() => FormWhereInput)
    where?: FormWhereInput;

    @Field(() => [FormOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FormOrderByWithRelationInput>;

    @Field(() => FormWhereUniqueInput, {nullable:true})
    cursor?: FormWhereUniqueInput;

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
