import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPermissionWhereInput } from './user-permission-where.input';
import { Type } from 'class-transformer';
import { UserPermissionOrderByWithAggregationInput } from './user-permission-order-by-with-aggregation.input';
import { UserPermissionScalarFieldEnum } from './user-permission-scalar-field.enum';
import { UserPermissionScalarWhereWithAggregatesInput } from './user-permission-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserPermissionCountAggregateInput } from './user-permission-count-aggregate.input';
import { UserPermissionAvgAggregateInput } from './user-permission-avg-aggregate.input';
import { UserPermissionSumAggregateInput } from './user-permission-sum-aggregate.input';
import { UserPermissionMinAggregateInput } from './user-permission-min-aggregate.input';
import { UserPermissionMaxAggregateInput } from './user-permission-max-aggregate.input';

@ArgsType()
export class UserPermissionGroupByArgs {

    @Field(() => UserPermissionWhereInput, {nullable:true})
    @Type(() => UserPermissionWhereInput)
    where?: UserPermissionWhereInput;

    @Field(() => [UserPermissionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserPermissionOrderByWithAggregationInput>;

    @Field(() => [UserPermissionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserPermissionScalarFieldEnum>;

    @Field(() => UserPermissionScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserPermissionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserPermissionCountAggregateInput, {nullable:true})
    _count?: UserPermissionCountAggregateInput;

    @Field(() => UserPermissionAvgAggregateInput, {nullable:true})
    _avg?: UserPermissionAvgAggregateInput;

    @Field(() => UserPermissionSumAggregateInput, {nullable:true})
    _sum?: UserPermissionSumAggregateInput;

    @Field(() => UserPermissionMinAggregateInput, {nullable:true})
    _min?: UserPermissionMinAggregateInput;

    @Field(() => UserPermissionMaxAggregateInput, {nullable:true})
    _max?: UserPermissionMaxAggregateInput;
}
