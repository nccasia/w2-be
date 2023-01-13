import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActionType } from './action-type.enum';
import { NestedEnumActionTypeFilter } from './nested-enum-action-type-filter.input';

@InputType()
export class EnumActionTypeFilter {

    @Field(() => ActionType, {nullable:true})
    equals?: keyof typeof ActionType;

    @Field(() => [ActionType], {nullable:true})
    in?: Array<keyof typeof ActionType>;

    @Field(() => [ActionType], {nullable:true})
    notIn?: Array<keyof typeof ActionType>;

    @Field(() => NestedEnumActionTypeFilter, {nullable:true})
    not?: NestedEnumActionTypeFilter;
}
