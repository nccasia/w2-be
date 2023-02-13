import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MemberOnProjectsOrderByRelationAggregateInput } from '../member-on-projects/member-on-projects-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { OrganizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { TaskDefinitionOrderByWithRelationInput } from '../task-definition/task-definition-order-by-with-relation.input';
import { ProjectSettingsOrderByRelationAggregateInput } from '../project-settings/project-settings-order-by-relation-aggregate.input';
import { TaskOrderByRelationAggregateInput } from '../task/task-order-by-relation-aggregate.input';
import { TaskBoardOrderByRelationAggregateInput } from '../task-board/task-board-order-by-relation-aggregate.input';

@InputType()
export class ProjectOrderByWithRelationInput {

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
    organizationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskDefinitionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creatorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    managerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reporterId?: keyof typeof SortOrder;

    @Field(() => MemberOnProjectsOrderByRelationAggregateInput, {nullable:true})
    members?: MemberOnProjectsOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    creator?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    manager?: UserOrderByWithRelationInput;

    @Field(() => OrganizationOrderByWithRelationInput, {nullable:true})
    organization?: OrganizationOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    reporter?: UserOrderByWithRelationInput;

    @Field(() => TaskDefinitionOrderByWithRelationInput, {nullable:true})
    taskDefinition?: TaskDefinitionOrderByWithRelationInput;

    @Field(() => ProjectSettingsOrderByRelationAggregateInput, {nullable:true})
    settings?: ProjectSettingsOrderByRelationAggregateInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    tasks?: TaskOrderByRelationAggregateInput;

    @Field(() => TaskBoardOrderByRelationAggregateInput, {nullable:true})
    taskBoards?: TaskBoardOrderByRelationAggregateInput;
}
