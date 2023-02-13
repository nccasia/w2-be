import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrganizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { ProjectOrderByWithRelationInput } from '../project/project-order-by-with-relation.input';
import { TaskDefinitionOrderByWithRelationInput } from '../task-definition/task-definition-order-by-with-relation.input';
import { TaskBoardSettingsOrderByRelationAggregateInput } from '../task-board-settings/task-board-settings-order-by-relation-aggregate.input';

@InputType()
export class TaskBoardOrderByWithRelationInput {

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
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    viewType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    viewConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskDefinitionId?: keyof typeof SortOrder;

    @Field(() => OrganizationOrderByWithRelationInput, {nullable:true})
    organization?: OrganizationOrderByWithRelationInput;

    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    project?: ProjectOrderByWithRelationInput;

    @Field(() => TaskDefinitionOrderByWithRelationInput, {nullable:true})
    taskDefinition?: TaskDefinitionOrderByWithRelationInput;

    @Field(() => TaskBoardSettingsOrderByRelationAggregateInput, {nullable:true})
    settings?: TaskBoardSettingsOrderByRelationAggregateInput;
}
