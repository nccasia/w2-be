import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermissionGroupCountAggregate } from './permission-group-count-aggregate.output';
import { PermissionGroupAvgAggregate } from './permission-group-avg-aggregate.output';
import { PermissionGroupSumAggregate } from './permission-group-sum-aggregate.output';
import { PermissionGroupMinAggregate } from './permission-group-min-aggregate.output';
import { PermissionGroupMaxAggregate } from './permission-group-max-aggregate.output';

@ObjectType()
export class AggregatePermissionGroup {

    @Field(() => PermissionGroupCountAggregate, {nullable:true})
    _count?: PermissionGroupCountAggregate;

    @Field(() => PermissionGroupAvgAggregate, {nullable:true})
    _avg?: PermissionGroupAvgAggregate;

    @Field(() => PermissionGroupSumAggregate, {nullable:true})
    _sum?: PermissionGroupSumAggregate;

    @Field(() => PermissionGroupMinAggregate, {nullable:true})
    _min?: PermissionGroupMinAggregate;

    @Field(() => PermissionGroupMaxAggregate, {nullable:true})
    _max?: PermissionGroupMaxAggregate;
}
