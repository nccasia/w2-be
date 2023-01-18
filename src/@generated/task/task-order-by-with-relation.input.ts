import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TaskDefinitionOrderByWithRelationInput } from '../task-definition/task-definition-order-by-with-relation.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { EventLogOrderByRelationAggregateInput } from '../event-log/event-log-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { TaskOrderByRelationAggregateInput } from './task-order-by-relation-aggregate.input';
import { OrganizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { TeamOrderByWithRelationInput } from '../team/team-order-by-with-relation.input';
import { TriggerOrderByRelationAggregateInput } from '../trigger/trigger-order-by-relation-aggregate.input';

@InputType()
export class TaskOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priority?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActve?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    properties?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    values?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    typeName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cta?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ctaName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stateName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    statusName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stateValues?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    descriptionTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    titleTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    statusTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stateTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notificationTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ctaTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stateConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    statusConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notificationConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    processConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    triggerConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ctaConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    formConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    config?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    definitionId?: keyof typeof SortOrder;

    @Field(() => TaskDefinitionOrderByWithRelationInput, {nullable:true})
    definition?: TaskDefinitionOrderByWithRelationInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => EventLogOrderByRelationAggregateInput, {nullable:true})
    eventLogs?: EventLogOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    assigneeId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    assignee?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    creatorId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    creator?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => TaskOrderByWithRelationInput, {nullable:true})
    parentTask?: TaskOrderByWithRelationInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    subTasks?: TaskOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => OrganizationOrderByWithRelationInput, {nullable:true})
    organization?: OrganizationOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;

    @Field(() => TeamOrderByWithRelationInput, {nullable:true})
    team?: TeamOrderByWithRelationInput;

    @Field(() => TriggerOrderByRelationAggregateInput, {nullable:true})
    Trigger?: TriggerOrderByRelationAggregateInput;
}
