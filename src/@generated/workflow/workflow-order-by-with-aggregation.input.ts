import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WorkflowCountOrderByAggregateInput } from './workflow-count-order-by-aggregate.input';
import { WorkflowAvgOrderByAggregateInput } from './workflow-avg-order-by-aggregate.input';
import { WorkflowMaxOrderByAggregateInput } from './workflow-max-order-by-aggregate.input';
import { WorkflowMinOrderByAggregateInput } from './workflow-min-order-by-aggregate.input';
import { WorkflowSumOrderByAggregateInput } from './workflow-sum-order-by-aggregate.input';

@InputType()
export class WorkflowOrderByWithAggregationInput {

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

    @Field(() => WorkflowCountOrderByAggregateInput, {nullable:true})
    _count?: WorkflowCountOrderByAggregateInput;

    @Field(() => WorkflowAvgOrderByAggregateInput, {nullable:true})
    _avg?: WorkflowAvgOrderByAggregateInput;

    @Field(() => WorkflowMaxOrderByAggregateInput, {nullable:true})
    _max?: WorkflowMaxOrderByAggregateInput;

    @Field(() => WorkflowMinOrderByAggregateInput, {nullable:true})
    _min?: WorkflowMinOrderByAggregateInput;

    @Field(() => WorkflowSumOrderByAggregateInput, {nullable:true})
    _sum?: WorkflowSumOrderByAggregateInput;
}
