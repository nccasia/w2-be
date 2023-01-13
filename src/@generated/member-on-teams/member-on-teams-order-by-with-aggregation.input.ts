import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MemberOnTeamsCountOrderByAggregateInput } from './member-on-teams-count-order-by-aggregate.input';
import { MemberOnTeamsAvgOrderByAggregateInput } from './member-on-teams-avg-order-by-aggregate.input';
import { MemberOnTeamsMaxOrderByAggregateInput } from './member-on-teams-max-order-by-aggregate.input';
import { MemberOnTeamsMinOrderByAggregateInput } from './member-on-teams-min-order-by-aggregate.input';
import { MemberOnTeamsSumOrderByAggregateInput } from './member-on-teams-sum-order-by-aggregate.input';

@InputType()
export class MemberOnTeamsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedBy?: keyof typeof SortOrder;

    @Field(() => MemberOnTeamsCountOrderByAggregateInput, {nullable:true})
    _count?: MemberOnTeamsCountOrderByAggregateInput;

    @Field(() => MemberOnTeamsAvgOrderByAggregateInput, {nullable:true})
    _avg?: MemberOnTeamsAvgOrderByAggregateInput;

    @Field(() => MemberOnTeamsMaxOrderByAggregateInput, {nullable:true})
    _max?: MemberOnTeamsMaxOrderByAggregateInput;

    @Field(() => MemberOnTeamsMinOrderByAggregateInput, {nullable:true})
    _min?: MemberOnTeamsMinOrderByAggregateInput;

    @Field(() => MemberOnTeamsSumOrderByAggregateInput, {nullable:true})
    _sum?: MemberOnTeamsSumOrderByAggregateInput;
}
