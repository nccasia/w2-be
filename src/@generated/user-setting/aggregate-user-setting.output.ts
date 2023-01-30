import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserSettingCountAggregate } from './user-setting-count-aggregate.output';
import { UserSettingAvgAggregate } from './user-setting-avg-aggregate.output';
import { UserSettingSumAggregate } from './user-setting-sum-aggregate.output';
import { UserSettingMinAggregate } from './user-setting-min-aggregate.output';
import { UserSettingMaxAggregate } from './user-setting-max-aggregate.output';

@ObjectType()
export class AggregateUserSetting {

    @Field(() => UserSettingCountAggregate, {nullable:true})
    _count?: UserSettingCountAggregate;

    @Field(() => UserSettingAvgAggregate, {nullable:true})
    _avg?: UserSettingAvgAggregate;

    @Field(() => UserSettingSumAggregate, {nullable:true})
    _sum?: UserSettingSumAggregate;

    @Field(() => UserSettingMinAggregate, {nullable:true})
    _min?: UserSettingMinAggregate;

    @Field(() => UserSettingMaxAggregate, {nullable:true})
    _max?: UserSettingMaxAggregate;
}
