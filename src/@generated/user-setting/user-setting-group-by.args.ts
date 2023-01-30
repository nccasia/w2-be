import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSettingWhereInput } from './user-setting-where.input';
import { Type } from 'class-transformer';
import { UserSettingOrderByWithAggregationInput } from './user-setting-order-by-with-aggregation.input';
import { UserSettingScalarFieldEnum } from './user-setting-scalar-field.enum';
import { UserSettingScalarWhereWithAggregatesInput } from './user-setting-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserSettingCountAggregateInput } from './user-setting-count-aggregate.input';
import { UserSettingAvgAggregateInput } from './user-setting-avg-aggregate.input';
import { UserSettingSumAggregateInput } from './user-setting-sum-aggregate.input';
import { UserSettingMinAggregateInput } from './user-setting-min-aggregate.input';
import { UserSettingMaxAggregateInput } from './user-setting-max-aggregate.input';

@ArgsType()
export class UserSettingGroupByArgs {

    @Field(() => UserSettingWhereInput, {nullable:true})
    @Type(() => UserSettingWhereInput)
    where?: UserSettingWhereInput;

    @Field(() => [UserSettingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserSettingOrderByWithAggregationInput>;

    @Field(() => [UserSettingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserSettingScalarFieldEnum>;

    @Field(() => UserSettingScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserSettingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserSettingCountAggregateInput, {nullable:true})
    _count?: UserSettingCountAggregateInput;

    @Field(() => UserSettingAvgAggregateInput, {nullable:true})
    _avg?: UserSettingAvgAggregateInput;

    @Field(() => UserSettingSumAggregateInput, {nullable:true})
    _sum?: UserSettingSumAggregateInput;

    @Field(() => UserSettingMinAggregateInput, {nullable:true})
    _min?: UserSettingMinAggregateInput;

    @Field(() => UserSettingMaxAggregateInput, {nullable:true})
    _max?: UserSettingMaxAggregateInput;
}
