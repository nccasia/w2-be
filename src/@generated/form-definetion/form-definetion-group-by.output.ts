import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { FormDefinetionCountAggregate } from './form-definetion-count-aggregate.output';
import { FormDefinetionAvgAggregate } from './form-definetion-avg-aggregate.output';
import { FormDefinetionSumAggregate } from './form-definetion-sum-aggregate.output';
import { FormDefinetionMinAggregate } from './form-definetion-min-aggregate.output';
import { FormDefinetionMaxAggregate } from './form-definetion-max-aggregate.output';

@ObjectType()
export class FormDefinetionGroupBy {

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

    @Field(() => GraphQLJSON, {nullable:false})
    triggerConfig!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    serializerConfig!: any;

    @Field(() => String, {nullable:false})
    displayTemplate!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    displayConfig!: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
