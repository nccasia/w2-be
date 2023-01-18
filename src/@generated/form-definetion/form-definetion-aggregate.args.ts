import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FormDefinetionWhereInput } from './form-definetion-where.input';
import { Type } from 'class-transformer';
import { FormDefinetionOrderByWithRelationInput } from './form-definetion-order-by-with-relation.input';
import { FormDefinetionWhereUniqueInput } from './form-definetion-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FormDefinetionCountAggregateInput } from './form-definetion-count-aggregate.input';
import { FormDefinetionAvgAggregateInput } from './form-definetion-avg-aggregate.input';
import { FormDefinetionSumAggregateInput } from './form-definetion-sum-aggregate.input';
import { FormDefinetionMinAggregateInput } from './form-definetion-min-aggregate.input';
import { FormDefinetionMaxAggregateInput } from './form-definetion-max-aggregate.input';

@ArgsType()
export class FormDefinetionAggregateArgs {

    @Field(() => FormDefinetionWhereInput, {nullable:true})
    @Type(() => FormDefinetionWhereInput)
    where?: FormDefinetionWhereInput;

    @Field(() => [FormDefinetionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FormDefinetionOrderByWithRelationInput>;

    @Field(() => FormDefinetionWhereUniqueInput, {nullable:true})
    cursor?: FormDefinetionWhereUniqueInput;

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
