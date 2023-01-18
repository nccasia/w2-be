import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerStatus } from './trigger-status.enum';
import { NestedEnumTriggerStatusFilter } from './nested-enum-trigger-status-filter.input';

@InputType()
export class EnumTriggerStatusFilter {

    @Field(() => TriggerStatus, {nullable:true})
    equals?: keyof typeof TriggerStatus;

    @Field(() => [TriggerStatus], {nullable:true})
    in?: Array<keyof typeof TriggerStatus>;

    @Field(() => [TriggerStatus], {nullable:true})
    notIn?: Array<keyof typeof TriggerStatus>;

    @Field(() => NestedEnumTriggerStatusFilter, {nullable:true})
    not?: NestedEnumTriggerStatusFilter;
}
