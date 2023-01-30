import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardType } from './task-board-type.enum';
import { NestedEnumTaskBoardTypeFilter } from './nested-enum-task-board-type-filter.input';

@InputType()
export class EnumTaskBoardTypeFilter {

    @Field(() => TaskBoardType, {nullable:true})
    equals?: keyof typeof TaskBoardType;

    @Field(() => [TaskBoardType], {nullable:true})
    in?: Array<keyof typeof TaskBoardType>;

    @Field(() => [TaskBoardType], {nullable:true})
    notIn?: Array<keyof typeof TaskBoardType>;

    @Field(() => NestedEnumTaskBoardTypeFilter, {nullable:true})
    not?: NestedEnumTaskBoardTypeFilter;
}
