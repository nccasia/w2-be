import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FormDefinetionCountOrderByAggregateInput } from './form-definetion-count-order-by-aggregate.input';
import { FormDefinetionAvgOrderByAggregateInput } from './form-definetion-avg-order-by-aggregate.input';
import { FormDefinetionMaxOrderByAggregateInput } from './form-definetion-max-order-by-aggregate.input';
import { FormDefinetionMinOrderByAggregateInput } from './form-definetion-min-order-by-aggregate.input';
import { FormDefinetionSumOrderByAggregateInput } from './form-definetion-sum-order-by-aggregate.input';

@InputType()
export class FormDefinetionOrderByWithAggregationInput {

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

    @Field(() => FormDefinetionCountOrderByAggregateInput, {nullable:true})
    _count?: FormDefinetionCountOrderByAggregateInput;

    @Field(() => FormDefinetionAvgOrderByAggregateInput, {nullable:true})
    _avg?: FormDefinetionAvgOrderByAggregateInput;

    @Field(() => FormDefinetionMaxOrderByAggregateInput, {nullable:true})
    _max?: FormDefinetionMaxOrderByAggregateInput;

    @Field(() => FormDefinetionMinOrderByAggregateInput, {nullable:true})
    _min?: FormDefinetionMinOrderByAggregateInput;

    @Field(() => FormDefinetionSumOrderByAggregateInput, {nullable:true})
    _sum?: FormDefinetionSumOrderByAggregateInput;
}
