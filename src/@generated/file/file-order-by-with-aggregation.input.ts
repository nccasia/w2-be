import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FileCountOrderByAggregateInput } from './file-count-order-by-aggregate.input';
import { FileAvgOrderByAggregateInput } from './file-avg-order-by-aggregate.input';
import { FileMaxOrderByAggregateInput } from './file-max-order-by-aggregate.input';
import { FileMinOrderByAggregateInput } from './file-min-order-by-aggregate.input';
import { FileSumOrderByAggregateInput } from './file-sum-order-by-aggregate.input';

@InputType()
export class FileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filename?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mimetype?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encoding?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    data?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cdnUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    varantName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    variantKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    variantValue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    variantOfId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => FileCountOrderByAggregateInput, {nullable:true})
    _count?: FileCountOrderByAggregateInput;

    @Field(() => FileAvgOrderByAggregateInput, {nullable:true})
    _avg?: FileAvgOrderByAggregateInput;

    @Field(() => FileMaxOrderByAggregateInput, {nullable:true})
    _max?: FileMaxOrderByAggregateInput;

    @Field(() => FileMinOrderByAggregateInput, {nullable:true})
    _min?: FileMinOrderByAggregateInput;

    @Field(() => FileSumOrderByAggregateInput, {nullable:true})
    _sum?: FileSumOrderByAggregateInput;
}
