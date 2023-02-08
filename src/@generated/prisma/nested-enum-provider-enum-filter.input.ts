import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProviderEnum } from './provider.enum';

@InputType()
export class NestedEnumProviderEnumFilter {

    @Field(() => ProviderEnum, {nullable:true})
    equals?: keyof typeof ProviderEnum;

    @Field(() => [ProviderEnum], {nullable:true})
    in?: Array<keyof typeof ProviderEnum>;

    @Field(() => [ProviderEnum], {nullable:true})
    notIn?: Array<keyof typeof ProviderEnum>;

    @Field(() => NestedEnumProviderEnumFilter, {nullable:true})
    not?: NestedEnumProviderEnumFilter;
}
