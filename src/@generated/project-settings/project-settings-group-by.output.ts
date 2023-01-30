import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ProjectSettingsCountAggregate } from './project-settings-count-aggregate.output';
import { ProjectSettingsAvgAggregate } from './project-settings-avg-aggregate.output';
import { ProjectSettingsSumAggregate } from './project-settings-sum-aggregate.output';
import { ProjectSettingsMinAggregate } from './project-settings-min-aggregate.output';
import { ProjectSettingsMaxAggregate } from './project-settings-max-aggregate.output';

@ObjectType()
export class ProjectSettingsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    value!: any;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => ProjectSettingsCountAggregate, {nullable:true})
    _count?: ProjectSettingsCountAggregate;

    @Field(() => ProjectSettingsAvgAggregate, {nullable:true})
    _avg?: ProjectSettingsAvgAggregate;

    @Field(() => ProjectSettingsSumAggregate, {nullable:true})
    _sum?: ProjectSettingsSumAggregate;

    @Field(() => ProjectSettingsMinAggregate, {nullable:true})
    _min?: ProjectSettingsMinAggregate;

    @Field(() => ProjectSettingsMaxAggregate, {nullable:true})
    _max?: ProjectSettingsMaxAggregate;
}
