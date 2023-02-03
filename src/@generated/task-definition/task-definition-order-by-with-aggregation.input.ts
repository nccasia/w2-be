import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TaskDefinitionCountOrderByAggregateInput } from './task-definition-count-order-by-aggregate.input';
import { TaskDefinitionAvgOrderByAggregateInput } from './task-definition-avg-order-by-aggregate.input';
import { TaskDefinitionMaxOrderByAggregateInput } from './task-definition-max-order-by-aggregate.input';
import { TaskDefinitionMinOrderByAggregateInput } from './task-definition-min-order-by-aggregate.input';
import { TaskDefinitionSumOrderByAggregateInput } from './task-definition-sum-order-by-aggregate.input';

@InputType()
export class TaskDefinitionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    keyTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thumbnail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    formId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    descriptionTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    titleTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    statusTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stateTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notificationTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ctaTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    machineConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contextConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stateConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    statusConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notificationConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    processConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    triggerConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ctaConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    config?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => TaskDefinitionCountOrderByAggregateInput, {nullable:true})
    _count?: TaskDefinitionCountOrderByAggregateInput;

    @Field(() => TaskDefinitionAvgOrderByAggregateInput, {nullable:true})
    _avg?: TaskDefinitionAvgOrderByAggregateInput;

    @Field(() => TaskDefinitionMaxOrderByAggregateInput, {nullable:true})
    _max?: TaskDefinitionMaxOrderByAggregateInput;

    @Field(() => TaskDefinitionMinOrderByAggregateInput, {nullable:true})
    _min?: TaskDefinitionMinOrderByAggregateInput;

    @Field(() => TaskDefinitionSumOrderByAggregateInput, {nullable:true})
    _sum?: TaskDefinitionSumOrderByAggregateInput;
}
