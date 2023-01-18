import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FormDefinetionCountAggregate } from './form-definetion-count-aggregate.output';
import { FormDefinetionAvgAggregate } from './form-definetion-avg-aggregate.output';
import { FormDefinetionSumAggregate } from './form-definetion-sum-aggregate.output';
import { FormDefinetionMinAggregate } from './form-definetion-min-aggregate.output';
import { FormDefinetionMaxAggregate } from './form-definetion-max-aggregate.output';

@ObjectType()
export class AggregateFormDefinetion {

    @Field(() => FormDefinetionCountAggregate, {nullable:true})
    _count?: FormDefinetionCountAggregate;

    @Field(() => FormDefinetionAvgAggregate, {nullable:true})
    _avg?: FormDefinetionAvgAggregate;

    @Field(() => FormDefinetionSumAggregate, {nullable:true})
    _sum?: FormDefinetionSumAggregate;

    @Field(() => FormDefinetionMinAggregate, {nullable:true})
    _min?: FormDefinetionMinAggregate;

    @Field(() => FormDefinetionMaxAggregate, {nullable:true})
    _max?: FormDefinetionMaxAggregate;
}
