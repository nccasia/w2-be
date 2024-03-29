import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { SettingsCountAggregate } from './settings-count-aggregate.output';
import { SettingsAvgAggregate } from './settings-avg-aggregate.output';
import { SettingsSumAggregate } from './settings-sum-aggregate.output';
import { SettingsMinAggregate } from './settings-min-aggregate.output';
import { SettingsMaxAggregate } from './settings-max-aggregate.output';

@ObjectType()
export class SettingsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    value!: any;

    @Field(() => SettingsCountAggregate, {nullable:true})
    _count?: SettingsCountAggregate;

    @Field(() => SettingsAvgAggregate, {nullable:true})
    _avg?: SettingsAvgAggregate;

    @Field(() => SettingsSumAggregate, {nullable:true})
    _sum?: SettingsSumAggregate;

    @Field(() => SettingsMinAggregate, {nullable:true})
    _min?: SettingsMinAggregate;

    @Field(() => SettingsMaxAggregate, {nullable:true})
    _max?: SettingsMaxAggregate;
}
