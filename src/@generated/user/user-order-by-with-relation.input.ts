import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';
import { OrganizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { TeamOrderByRelationAggregateInput } from '../team/team-order-by-relation-aggregate.input';
import { TaskOrderByRelationAggregateInput } from '../task/task-order-by-relation-aggregate.input';
import { MemberOnTeamsOrderByRelationAggregateInput } from '../member-on-teams/member-on-teams-order-by-relation-aggregate.input';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { EventLogOrderByRelationAggregateInput } from '../event-log/event-log-order-by-relation-aggregate.input';
import { UserPermissionOrderByRelationAggregateInput } from '../user-permission/user-permission-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatarId?: keyof typeof SortOrder;

    @Field(() => FileOrderByWithRelationInput, {nullable:true})
    avatar?: FileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => OrganizationOrderByWithRelationInput, {nullable:true})
    organization?: OrganizationOrderByWithRelationInput;

    @Field(() => TeamOrderByRelationAggregateInput, {nullable:true})
    managedteams?: TeamOrderByRelationAggregateInput;

    @Field(() => TeamOrderByRelationAggregateInput, {nullable:true})
    createdteams?: TeamOrderByRelationAggregateInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    createdTasks?: TaskOrderByRelationAggregateInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    assignedTasks?: TaskOrderByRelationAggregateInput;

    @Field(() => MemberOnTeamsOrderByRelationAggregateInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsOrderByRelationAggregateInput;

    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: PostOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => EventLogOrderByRelationAggregateInput, {nullable:true})
    taskEvents?: EventLogOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => UserPermissionOrderByRelationAggregateInput, {nullable:true})
    userPermissions?: UserPermissionOrderByRelationAggregateInput;
}
