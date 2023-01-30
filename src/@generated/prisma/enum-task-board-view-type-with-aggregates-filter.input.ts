import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardViewType } from '../task/task-board-view-type.enum';
import { NestedEnumTaskBoardViewTypeWithAggregatesFilter } from './nested-enum-task-board-view-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTaskBoardViewTypeFilter } from './nested-enum-task-board-view-type-filter.input';

@InputType()
export class EnumTaskBoardViewTypeWithAggregatesFilter {

    @Field(() => TaskBoardViewType, {nullable:true})
    equals?: keyof typeof TaskBoardViewType;

    @Field(() => [TaskBoardViewType], {nullable:true})
    in?: Array<keyof typeof TaskBoardViewType>;

    @Field(() => [TaskBoardViewType], {nullable:true})
    notIn?: Array<keyof typeof TaskBoardViewType>;

    @Field(() => NestedEnumTaskBoardViewTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTaskBoardViewTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTaskBoardViewTypeFilter, {nullable:true})
    _min?: NestedEnumTaskBoardViewTypeFilter;

    @Field(() => NestedEnumTaskBoardViewTypeFilter, {nullable:true})
    _max?: NestedEnumTaskBoardViewTypeFilter;
}
