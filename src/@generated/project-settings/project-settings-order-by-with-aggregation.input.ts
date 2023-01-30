import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProjectSettingsCountOrderByAggregateInput } from './project-settings-count-order-by-aggregate.input';
import { ProjectSettingsAvgOrderByAggregateInput } from './project-settings-avg-order-by-aggregate.input';
import { ProjectSettingsMaxOrderByAggregateInput } from './project-settings-max-order-by-aggregate.input';
import { ProjectSettingsMinOrderByAggregateInput } from './project-settings-min-order-by-aggregate.input';
import { ProjectSettingsSumOrderByAggregateInput } from './project-settings-sum-order-by-aggregate.input';

@InputType()
export class ProjectSettingsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => ProjectSettingsCountOrderByAggregateInput, {nullable:true})
    _count?: ProjectSettingsCountOrderByAggregateInput;

    @Field(() => ProjectSettingsAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProjectSettingsAvgOrderByAggregateInput;

    @Field(() => ProjectSettingsMaxOrderByAggregateInput, {nullable:true})
    _max?: ProjectSettingsMaxOrderByAggregateInput;

    @Field(() => ProjectSettingsMinOrderByAggregateInput, {nullable:true})
    _min?: ProjectSettingsMinOrderByAggregateInput;

    @Field(() => ProjectSettingsSumOrderByAggregateInput, {nullable:true})
    _sum?: ProjectSettingsSumOrderByAggregateInput;
}
