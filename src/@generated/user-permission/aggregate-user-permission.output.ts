import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserPermissionCountAggregate } from './user-permission-count-aggregate.output';
import { UserPermissionAvgAggregate } from './user-permission-avg-aggregate.output';
import { UserPermissionSumAggregate } from './user-permission-sum-aggregate.output';
import { UserPermissionMinAggregate } from './user-permission-min-aggregate.output';
import { UserPermissionMaxAggregate } from './user-permission-max-aggregate.output';

@ObjectType()
export class AggregateUserPermission {

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
