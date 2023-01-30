import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardViewType } from '../task/task-board-view-type.enum';
import { NestedEnumTaskBoardViewTypeFilter } from './nested-enum-task-board-view-type-filter.input';

@InputType()
export class EnumTaskBoardViewTypeFilter {

    @Field(() => TaskBoardViewType, {nullable:true})
    equals?: keyof typeof TaskBoardViewType;

    @Field(() => [TaskBoardViewType], {nullable:true})
    in?: Array<keyof typeof TaskBoardViewType>;

    @Field(() => [TaskBoardViewType], {nullable:true})
    notIn?: Array<keyof typeof TaskBoardViewType>;

    @Field(() => NestedEnumTaskBoardViewTypeFilter, {nullable:true})
    not?: NestedEnumTaskBoardViewTypeFilter;
}
