import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerStatus } from './trigger-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTriggerStatusFilter } from './nested-enum-trigger-status-filter.input';

@InputType()
export class NestedEnumTriggerStatusWithAggregatesFilter {

    @Field(() => TriggerStatus, {nullable:true})
    equals?: keyof typeof TriggerStatus;

    @Field(() => [TriggerStatus], {nullable:true})
    in?: Array<keyof typeof TriggerStatus>;

    @Field(() => [TriggerStatus], {nullable:true})
    notIn?: Array<keyof typeof TriggerStatus>;

    @Field(() => NestedEnumTriggerStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTriggerStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTriggerStatusFilter, {nullable:true})
    _min?: NestedEnumTriggerStatusFilter;

    @Field(() => NestedEnumTriggerStatusFilter, {nullable:true})
    _max?: NestedEnumTriggerStatusFilter;
}
