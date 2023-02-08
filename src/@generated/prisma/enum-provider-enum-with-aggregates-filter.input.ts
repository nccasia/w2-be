import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderEnum } from './provider.enum';
import { NestedEnumProviderEnumWithAggregatesFilter } from './nested-enum-provider-enum-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumProviderEnumFilter } from './nested-enum-provider-enum-filter.input';

@InputType()
export class EnumProviderEnumWithAggregatesFilter {

    @Field(() => ProviderEnum, {nullable:true})
    equals?: keyof typeof ProviderEnum;

    @Field(() => [ProviderEnum], {nullable:true})
    in?: Array<keyof typeof ProviderEnum>;

    @Field(() => [ProviderEnum], {nullable:true})
    notIn?: Array<keyof typeof ProviderEnum>;

    @Field(() => NestedEnumProviderEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProviderEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumProviderEnumFilter, {nullable:true})
    _min?: NestedEnumProviderEnumFilter;

    @Field(() => NestedEnumProviderEnumFilter, {nullable:true})
    _max?: NestedEnumProviderEnumFilter;
}
