import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerType } from './trigger-type.enum';
import { NestedEnumTriggerTypeWithAggregatesFilter } from './nested-enum-trigger-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTriggerTypeFilter } from './nested-enum-trigger-type-filter.input';

@InputType()
export class EnumTriggerTypeWithAggregatesFilter {

    @Field(() => TriggerType, {nullable:true})
    equals?: keyof typeof TriggerType;

    @Field(() => [TriggerType], {nullable:true})
    in?: Array<keyof typeof TriggerType>;

    @Field(() => [TriggerType], {nullable:true})
    notIn?: Array<keyof typeof TriggerType>;

    @Field(() => NestedEnumTriggerTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTriggerTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTriggerTypeFilter, {nullable:true})
    _min?: NestedEnumTriggerTypeFilter;

    @Field(() => NestedEnumTriggerTypeFilter, {nullable:true})
    _max?: NestedEnumTriggerTypeFilter;
}
