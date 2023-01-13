import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrganizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { ActivityOrderByRelationAggregateInput } from '../activity/activity-order-by-relation-aggregate.input';
import { TaskDefinitionOrderByRelationAggregateInput } from '../task-definition/task-definition-order-by-relation-aggregate.input';

@InputType()
export class WorkflowOrderByWithRelationInput {

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
    organizationId?: keyof typeof SortOrder;

    @Field(() => OrganizationOrderByWithRelationInput, {nullable:true})
    organization?: OrganizationOrderByWithRelationInput;

    @Field(() => ActivityOrderByRelationAggregateInput, {nullable:true})
    activities?: ActivityOrderByRelationAggregateInput;

    @Field(() => TaskDefinitionOrderByRelationAggregateInput, {nullable:true})
    taskDefinitions?: TaskDefinitionOrderByRelationAggregateInput;
}
