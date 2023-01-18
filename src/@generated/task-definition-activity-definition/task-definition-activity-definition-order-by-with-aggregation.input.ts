import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TaskDefinitionActivityDefinitionCountOrderByAggregateInput } from './task-definition-activity-definition-count-order-by-aggregate.input';
import { TaskDefinitionActivityDefinitionAvgOrderByAggregateInput } from './task-definition-activity-definition-avg-order-by-aggregate.input';
import { TaskDefinitionActivityDefinitionMaxOrderByAggregateInput } from './task-definition-activity-definition-max-order-by-aggregate.input';
import { TaskDefinitionActivityDefinitionMinOrderByAggregateInput } from './task-definition-activity-definition-min-order-by-aggregate.input';
import { TaskDefinitionActivityDefinitionSumOrderByAggregateInput } from './task-definition-activity-definition-sum-order-by-aggregate.input';

@InputType()
export class TaskDefinitionActivityDefinitionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taskDefinitionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activityDefinitionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    config?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    initialValue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TaskDefinitionActivityDefinitionCountOrderByAggregateInput, {nullable:true})
    _count?: TaskDefinitionActivityDefinitionCountOrderByAggregateInput;

    @Field(() => TaskDefinitionActivityDefinitionAvgOrderByAggregateInput, {nullable:true})
    _avg?: TaskDefinitionActivityDefinitionAvgOrderByAggregateInput;

    @Field(() => TaskDefinitionActivityDefinitionMaxOrderByAggregateInput, {nullable:true})
    _max?: TaskDefinitionActivityDefinitionMaxOrderByAggregateInput;

    @Field(() => TaskDefinitionActivityDefinitionMinOrderByAggregateInput, {nullable:true})
    _min?: TaskDefinitionActivityDefinitionMinOrderByAggregateInput;

    @Field(() => TaskDefinitionActivityDefinitionSumOrderByAggregateInput, {nullable:true})
    _sum?: TaskDefinitionActivityDefinitionSumOrderByAggregateInput;
}
