import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrganizationCountOrderByAggregateInput } from './organization-count-order-by-aggregate.input';
import { OrganizationAvgOrderByAggregateInput } from './organization-avg-order-by-aggregate.input';
import { OrganizationMaxOrderByAggregateInput } from './organization-max-order-by-aggregate.input';
import { OrganizationMinOrderByAggregateInput } from './organization-min-order-by-aggregate.input';
import { OrganizationSumOrderByAggregateInput } from './organization-sum-order-by-aggregate.input';

@InputType()
export class OrganizationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => OrganizationCountOrderByAggregateInput, {nullable:true})
    _count?: OrganizationCountOrderByAggregateInput;

    @Field(() => OrganizationAvgOrderByAggregateInput, {nullable:true})
    _avg?: OrganizationAvgOrderByAggregateInput;

    @Field(() => OrganizationMaxOrderByAggregateInput, {nullable:true})
    _max?: OrganizationMaxOrderByAggregateInput;

    @Field(() => OrganizationMinOrderByAggregateInput, {nullable:true})
    _min?: OrganizationMinOrderByAggregateInput;

    @Field(() => OrganizationSumOrderByAggregateInput, {nullable:true})
    _sum?: OrganizationSumOrderByAggregateInput;
}
