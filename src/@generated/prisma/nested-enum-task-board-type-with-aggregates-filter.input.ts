import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardType } from './task-board-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTaskBoardTypeFilter } from './nested-enum-task-board-type-filter.input';

@InputType()
export class NestedEnumTaskBoardTypeWithAggregatesFilter {

    @Field(() => TaskBoardType, {nullable:true})
    equals?: keyof typeof TaskBoardType;

    @Field(() => [TaskBoardType], {nullable:true})
    in?: Array<keyof typeof TaskBoardType>;

    @Field(() => [TaskBoardType], {nullable:true})
    notIn?: Array<keyof typeof TaskBoardType>;

    @Field(() => NestedEnumTaskBoardTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTaskBoardTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTaskBoardTypeFilter, {nullable:true})
    _min?: NestedEnumTaskBoardTypeFilter;

    @Field(() => NestedEnumTaskBoardTypeFilter, {nullable:true})
    _max?: NestedEnumTaskBoardTypeFilter;
}
