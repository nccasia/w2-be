import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerType } from './trigger-type.enum';
import { NestedEnumTriggerTypeFilter } from './nested-enum-trigger-type-filter.input';

@InputType()
export class EnumTriggerTypeFilter {

    @Field(() => TriggerType, {nullable:true})
    equals?: keyof typeof TriggerType;

    @Field(() => [TriggerType], {nullable:true})
    in?: Array<keyof typeof TriggerType>;

    @Field(() => [TriggerType], {nullable:true})
    notIn?: Array<keyof typeof TriggerType>;

    @Field(() => NestedEnumTriggerTypeFilter, {nullable:true})
    not?: NestedEnumTriggerTypeFilter;
}
