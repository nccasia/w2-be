import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FormOrderByWithRelationInput } from '../form/form-order-by-with-relation.input';
import { TaskOrderByRelationAggregateInput } from '../task/task-order-by-relation-aggregate.input';
import { OrganizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { TaskDefinitionOrderByRelationAggregateInput } from './task-definition-order-by-relation-aggregate.input';
import { WorkflowOrderByWithRelationInput } from '../workflow/workflow-order-by-with-relation.input';
import { ActivityOrderByWithRelationInput } from '../activity/activity-order-by-with-relation.input';

@InputType()
export class TaskDefinitionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thumbnail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    formId?: keyof typeof SortOrder;

    @Field(() => FormOrderByWithRelationInput, {nullable:true})
    form?: FormOrderByWithRelationInput;

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
    config?: keyof typeof SortOrder;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    taskInstances?: TaskOrderByRelationAggregateInput;

    @Field(() => OrganizationOrderByWithRelationInput, {nullable:true})
    organization?: OrganizationOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => TaskDefinitionOrderByWithRelationInput, {nullable:true})
    parentTaskDefinition?: TaskDefinitionOrderByWithRelationInput;

    @Field(() => TaskDefinitionOrderByRelationAggregateInput, {nullable:true})
    subTaskDefinitions?: TaskDefinitionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    workflowId?: keyof typeof SortOrder;

    @Field(() => WorkflowOrderByWithRelationInput, {nullable:true})
    workflow?: WorkflowOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    actvityId?: keyof typeof SortOrder;

    @Field(() => ActivityOrderByWithRelationInput, {nullable:true})
    activity?: ActivityOrderByWithRelationInput;
}