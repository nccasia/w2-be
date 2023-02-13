import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MemberOnTeamsOrderByRelationAggregateInput } from '../member-on-teams/member-on-teams-order-by-relation-aggregate.input';
import { TaskOrderByRelationAggregateInput } from '../task/task-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { OrganizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';

@InputType()
export class TeamOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bio?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creatorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    managerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => MemberOnTeamsOrderByRelationAggregateInput, {nullable:true})
    memberOnTeams?: MemberOnTeamsOrderByRelationAggregateInput;

    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    tasks?: TaskOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    creator?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    manager?: UserOrderByWithRelationInput;

    @Field(() => OrganizationOrderByWithRelationInput, {nullable:true})
    organization?: OrganizationOrderByWithRelationInput;
}
