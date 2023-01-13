import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActionType } from './action-type.enum';
import { NestedEnumActionTypeWithAggregatesFilter } from './nested-enum-action-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumActionTypeFilter } from './nested-enum-action-type-filter.input';

@InputType()
export class EnumActionTypeWithAggregatesFilter {

    @Field(() => ActionType, {nullable:true})
    equals?: keyof typeof ActionType;

    @Field(() => [ActionType], {nullable:true})
    in?: Array<keyof typeof ActionType>;

    @Field(() => [ActionType], {nullable:true})
    notIn?: Array<keyof typeof ActionType>;

    @Field(() => NestedEnumActionTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumActionTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumActionTypeFilter, {nullable:true})
    _min?: NestedEnumActionTypeFilter;

    @Field(() => NestedEnumActionTypeFilter, {nullable:true})
    _max?: NestedEnumActionTypeFilter;
}
