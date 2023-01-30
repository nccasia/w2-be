import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MemberOnProjectsCountOrderByAggregateInput } from './member-on-projects-count-order-by-aggregate.input';
import { MemberOnProjectsAvgOrderByAggregateInput } from './member-on-projects-avg-order-by-aggregate.input';
import { MemberOnProjectsMaxOrderByAggregateInput } from './member-on-projects-max-order-by-aggregate.input';
import { MemberOnProjectsMinOrderByAggregateInput } from './member-on-projects-min-order-by-aggregate.input';
import { MemberOnProjectsSumOrderByAggregateInput } from './member-on-projects-sum-order-by-aggregate.input';

@InputType()
export class MemberOnProjectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignedBy?: keyof typeof SortOrder;

    @Field(() => MemberOnProjectsCountOrderByAggregateInput, {nullable:true})
    _count?: MemberOnProjectsCountOrderByAggregateInput;

    @Field(() => MemberOnProjectsAvgOrderByAggregateInput, {nullable:true})
    _avg?: MemberOnProjectsAvgOrderByAggregateInput;

    @Field(() => MemberOnProjectsMaxOrderByAggregateInput, {nullable:true})
    _max?: MemberOnProjectsMaxOrderByAggregateInput;

    @Field(() => MemberOnProjectsMinOrderByAggregateInput, {nullable:true})
    _min?: MemberOnProjectsMinOrderByAggregateInput;

    @Field(() => MemberOnProjectsSumOrderByAggregateInput, {nullable:true})
    _sum?: MemberOnProjectsSumOrderByAggregateInput;
}
