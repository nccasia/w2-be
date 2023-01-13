import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserPermissionCountAggregate } from './user-permission-count-aggregate.output';
import { UserPermissionAvgAggregate } from './user-permission-avg-aggregate.output';
import { UserPermissionSumAggregate } from './user-permission-sum-aggregate.output';
import { UserPermissionMinAggregate } from './user-permission-min-aggregate.output';
import { UserPermissionMaxAggregate } from './user-permission-max-aggregate.output';

@ObjectType()
export class UserPermissionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    permissionId!: number;

    @Field(() => UserPermissionCountAggregate, {nullable:true})
    _count?: UserPermissionCountAggregate;

    @Field(() => UserPermissionAvgAggregate, {nullable:true})
    _avg?: UserPermissionAvgAggregate;

    @Field(() => UserPermissionSumAggregate, {nullable:true})
    _sum?: UserPermissionSumAggregate;

    @Field(() => UserPermissionMinAggregate, {nullable:true})
    _min?: UserPermissionMinAggregate;

    @Field(() => UserPermissionMaxAggregate, {nullable:true})
    _max?: UserPermissionMaxAggregate;
}
