import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActivityDefinitionCountOrderByAggregateInput } from './activity-definition-count-order-by-aggregate.input';
import { ActivityDefinitionAvgOrderByAggregateInput } from './activity-definition-avg-order-by-aggregate.input';
import { ActivityDefinitionMaxOrderByAggregateInput } from './activity-definition-max-order-by-aggregate.input';
import { ActivityDefinitionMinOrderByAggregateInput } from './activity-definition-min-order-by-aggregate.input';
import { ActivityDefinitionSumOrderByAggregateInput } from './activity-definition-sum-order-by-aggregate.input';

@InputType()
export class ActivityDefinitionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    synchronous?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    config?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    initialValue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => ActivityDefinitionCountOrderByAggregateInput, {nullable:true})
    _count?: ActivityDefinitionCountOrderByAggregateInput;

    @Field(() => ActivityDefinitionAvgOrderByAggregateInput, {nullable:true})
    _avg?: ActivityDefinitionAvgOrderByAggregateInput;

    @Field(() => ActivityDefinitionMaxOrderByAggregateInput, {nullable:true})
    _max?: ActivityDefinitionMaxOrderByAggregateInput;

    @Field(() => ActivityDefinitionMinOrderByAggregateInput, {nullable:true})
    _min?: ActivityDefinitionMinOrderByAggregateInput;

    @Field(() => ActivityDefinitionSumOrderByAggregateInput, {nullable:true})
    _sum?: ActivityDefinitionSumOrderByAggregateInput;
}
