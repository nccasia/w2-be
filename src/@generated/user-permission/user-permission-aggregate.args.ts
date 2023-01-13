import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPermissionWhereInput } from './user-permission-where.input';
import { Type } from 'class-transformer';
import { UserPermissionOrderByWithRelationInput } from './user-permission-order-by-with-relation.input';
import { UserPermissionWhereUniqueInput } from './user-permission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserPermissionCountAggregateInput } from './user-permission-count-aggregate.input';
import { UserPermissionAvgAggregateInput } from './user-permission-avg-aggregate.input';
import { UserPermissionSumAggregateInput } from './user-permission-sum-aggregate.input';
import { UserPermissionMinAggregateInput } from './user-permission-min-aggregate.input';
import { UserPermissionMaxAggregateInput } from './user-permission-max-aggregate.input';

@ArgsType()
export class UserPermissionAggregateArgs {

    @Field(() => UserPermissionWhereInput, {nullable:true})
    @Type(() => UserPermissionWhereInput)
    where?: UserPermissionWhereInput;

    @Field(() => [UserPermissionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserPermissionOrderByWithRelationInput>;

    @Field(() => UserPermissionWhereUniqueInput, {nullable:true})
    cursor?: UserPermissionWhereUniqueInput;

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
