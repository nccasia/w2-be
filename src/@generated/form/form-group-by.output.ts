import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { FormCountAggregate } from './form-count-aggregate.output';
import { FormAvgAggregate } from './form-avg-aggregate.output';
import { FormSumAggregate } from './form-sum-aggregate.output';
import { FormMinAggregate } from './form-min-aggregate.output';
import { FormMaxAggregate } from './form-max-aggregate.output';

@ObjectType()
export class FormGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    schema!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    config!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    validationConfig!: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    values?: any;

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
