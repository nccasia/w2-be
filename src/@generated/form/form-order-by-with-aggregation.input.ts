import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FormCountOrderByAggregateInput } from './form-count-order-by-aggregate.input';
import { FormAvgOrderByAggregateInput } from './form-avg-order-by-aggregate.input';
import { FormMaxOrderByAggregateInput } from './form-max-order-by-aggregate.input';
import { FormMinOrderByAggregateInput } from './form-min-order-by-aggregate.input';
import { FormSumOrderByAggregateInput } from './form-sum-order-by-aggregate.input';

@InputType()
export class FormOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    schema?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    config?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validationConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    triggerConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serializerConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayTemplate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    displayConfig?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FormCountOrderByAggregateInput, {nullable:true})
    _count?: FormCountOrderByAggregateInput;

    @Field(() => FormAvgOrderByAggregateInput, {nullable:true})
    _avg?: FormAvgOrderByAggregateInput;

    @Field(() => FormMaxOrderByAggregateInput, {nullable:true})
    _max?: FormMaxOrderByAggregateInput;

    @Field(() => FormMinOrderByAggregateInput, {nullable:true})
    _min?: FormMinOrderByAggregateInput;

    @Field(() => FormSumOrderByAggregateInput, {nullable:true})
    _sum?: FormSumOrderByAggregateInput;
}
