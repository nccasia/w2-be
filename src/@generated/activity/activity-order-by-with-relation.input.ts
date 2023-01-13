import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkflowOrderByWithRelationInput } from '../workflow/workflow-order-by-with-relation.input';
import { TaskDefinitionOrderByRelationAggregateInput } from '../task-definition/task-definition-order-by-relation-aggregate.input';
import { TriggerOrderByRelationAggregateInput } from '../trigger/trigger-order-by-relation-aggregate.input';

@InputType()
export class ActivityOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    config?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    workflowId?: keyof typeof SortOrder;

    @Field(() => WorkflowOrderByWithRelationInput, {nullable:true})
    workflow?: WorkflowOrderByWithRelationInput;

    @Field(() => TaskDefinitionOrderByRelationAggregateInput, {nullable:true})
    taskDefinitions?: TaskDefinitionOrderByRelationAggregateInput;

    @Field(() => TriggerOrderByRelationAggregateInput, {nullable:true})
    triggers?: TriggerOrderByRelationAggregateInput;
}
