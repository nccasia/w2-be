import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionGroupWhereInput } from './permission-group-where.input';
import { Type } from 'class-transformer';
import { PermissionGroupOrderByWithRelationInput } from './permission-group-order-by-with-relation.input';
import { PermissionGroupWhereUniqueInput } from './permission-group-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionGroupCountAggregateInput } from './permission-group-count-aggregate.input';
import { PermissionGroupAvgAggregateInput } from './permission-group-avg-aggregate.input';
import { PermissionGroupSumAggregateInput } from './permission-group-sum-aggregate.input';
import { PermissionGroupMinAggregateInput } from './permission-group-min-aggregate.input';
import { PermissionGroupMaxAggregateInput } from './permission-group-max-aggregate.input';

@ArgsType()
export class PermissionGroupAggregateArgs {

    @Field(() => PermissionGroupWhereInput, {nullable:true})
    @Type(() => PermissionGroupWhereInput)
    where?: PermissionGroupWhereInput;

    @Field(() => [PermissionGroupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PermissionGroupOrderByWithRelationInput>;

    @Field(() => PermissionGroupWhereUniqueInput, {nullable:true})
    cursor?: PermissionGroupWhereUniqueInput;

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
