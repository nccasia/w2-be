import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionGroupWhereInput } from './permission-group-where.input';
import { Type } from 'class-transformer';
import { PermissionGroupOrderByWithAggregationInput } from './permission-group-order-by-with-aggregation.input';
import { PermissionGroupScalarFieldEnum } from './permission-group-scalar-field.enum';
import { PermissionGroupScalarWhereWithAggregatesInput } from './permission-group-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PermissionGroupCountAggregateInput } from './permission-group-count-aggregate.input';
import { PermissionGroupAvgAggregateInput } from './permission-group-avg-aggregate.input';
import { PermissionGroupSumAggregateInput } from './permission-group-sum-aggregate.input';
import { PermissionGroupMinAggregateInput } from './permission-group-min-aggregate.input';
import { PermissionGroupMaxAggregateInput } from './permission-group-max-aggregate.input';

@ArgsType()
export class PermissionGroupGroupByArgs {

    @Field(() => PermissionGroupWhereInput, {nullable:true})
    @Type(() => PermissionGroupWhereInput)
    where?: PermissionGroupWhereInput;

    @Field(() => [PermissionGroupOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PermissionGroupOrderByWithAggregationInput>;

    @Field(() => [PermissionGroupScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PermissionGroupScalarFieldEnum>;

    @Field(() => PermissionGroupScalarWhereWithAggregatesInput, {nullable:true})
    having?: PermissionGroupScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PermissionGroupCountAggregateInput, {nullable:true})
    _count?: PermissionGroupCountAggregateInput;

    @Field(() => PermissionGroupAvgAggregateInput, {nullable:true})
    _avg?: PermissionGroupAvgAggregateInput;

    @Field(() => PermissionGroupSumAggregateInput, {nullable:true})
    _sum?: PermissionGroupSumAggregateInput;

    @Field(() => PermissionGroupMinAggregateInput, {nullable:true})
    _min?: PermissionGroupMinAggregateInput;

    @Field(() => PermissionGroupMaxAggregateInput, {nullable:true})
    _max?: PermissionGroupMaxAggregateInput;
}
