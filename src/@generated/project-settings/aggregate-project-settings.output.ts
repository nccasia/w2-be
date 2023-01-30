import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectSettingsCountAggregate } from './project-settings-count-aggregate.output';
import { ProjectSettingsAvgAggregate } from './project-settings-avg-aggregate.output';
import { ProjectSettingsSumAggregate } from './project-settings-sum-aggregate.output';
import { ProjectSettingsMinAggregate } from './project-settings-min-aggregate.output';
import { ProjectSettingsMaxAggregate } from './project-settings-max-aggregate.output';

@ObjectType()
export class AggregateProjectSettings {

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
