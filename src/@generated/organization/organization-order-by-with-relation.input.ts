import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TaskOrderByRelationAggregateInput } from '../task/task-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { TeamOrderByRelationAggregateInput } from '../team/team-order-by-relation-aggregate.input';
import { SettingsOrderByRelationAggregateInput } from '../settings/settings-order-by-relation-aggregate.input';
import { FileOrderByRelationAggregateInput } from '../file/file-order-by-relation-aggregate.input';
import { EventLogOrderByRelationAggregateInput } from '../event-log/event-log-order-by-relation-aggregate.input';
import { TaskDefinitionOrderByRelationAggregateInput } from '../task-definition/task-definition-order-by-relation-aggregate.input';
import { PermissionGroupOrderByRelationAggregateInput } from '../permission-group/permission-group-order-by-relation-aggregate.input';
import { PermissionOrderByRelationAggregateInput } from '../permission/permission-order-by-relation-aggregate.input';
import { ResourceOrderByRelationAggregateInput } from '../resource/resource-order-by-relation-aggregate.input';

@InputType()
export class OrganizationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    tasks?: TaskOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: UserOrderByRelationAggregateInput;

    @Field(() => TeamOrderByRelationAggregateInput, {nullable:true})
    teams?: TeamOrderByRelationAggregateInput;

    @Field(() => SettingsOrderByRelationAggregateInput, {nullable:true})
    settings?: SettingsOrderByRelationAggregateInput;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    files?: FileOrderByRelationAggregateInput;

    @Field(() => EventLogOrderByRelationAggregateInput, {nullable:true})
    eventLogs?: EventLogOrderByRelationAggregateInput;

    @Field(() => TaskDefinitionOrderByRelationAggregateInput, {nullable:true})
    taskDefinitions?: TaskDefinitionOrderByRelationAggregateInput;

    @Field(() => PermissionGroupOrderByRelationAggregateInput, {nullable:true})
    permissionGroups?: PermissionGroupOrderByRelationAggregateInput;

    @Field(() => PermissionOrderByRelationAggregateInput, {nullable:true})
    permissions?: PermissionOrderByRelationAggregateInput;

    @Field(() => ResourceOrderByRelationAggregateInput, {nullable:true})
    resources?: ResourceOrderByRelationAggregateInput;
}
