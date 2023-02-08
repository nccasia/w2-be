import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderEnum } from './provider.enum';
import { NestedEnumProviderEnumFilter } from './nested-enum-provider-enum-filter.input';

@InputType()
export class EnumProviderEnumFilter {

    @Field(() => ProviderEnum, {nullable:true})
    equals?: keyof typeof ProviderEnum;

    @Field(() => [ProviderEnum], {nullable:true})
    in?: Array<keyof typeof ProviderEnum>;

    @Field(() => [ProviderEnum], {nullable:true})
    notIn?: Array<keyof typeof ProviderEnum>;

    @Field(() => NestedEnumProviderEnumFilter, {nullable:true})
    not?: NestedEnumProviderEnumFilter;
}
