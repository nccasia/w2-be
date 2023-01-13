import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FormCountAggregate } from './form-count-aggregate.output';
import { FormAvgAggregate } from './form-avg-aggregate.output';
import { FormSumAggregate } from './form-sum-aggregate.output';
import { FormMinAggregate } from './form-min-aggregate.output';
import { FormMaxAggregate } from './form-max-aggregate.output';

@ObjectType()
export class AggregateForm {

    @Field(() => FormCountAggregate, {nullable:true})
    _count?: FormCountAggregate;

    @Field(() => FormAvgAggregate, {nullable:true})
    _avg?: FormAvgAggregate;

    @Field(() => FormSumAggregate, {nullable:true})
    _sum?: FormSumAggregate;

    @Field(() => FormMinAggregate, {nullable:true})
    _min?: FormMinAggregate;

    @Field(() => FormMaxAggregate, {nullable:true})
    _max?: FormMaxAggregate;
}
