import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardType } from './task-board-type.enum';

@InputType()
export class NestedEnumTaskBoardTypeFilter {

    @Field(() => TaskBoardType, {nullable:true})
    equals?: keyof typeof TaskBoardType;

    @Field(() => [TaskBoardType], {nullable:true})
    in?: Array<keyof typeof TaskBoardType>;

    @Field(() => [TaskBoardType], {nullable:true})
    notIn?: Array<keyof typeof TaskBoardType>;

    @Field(() => NestedEnumTaskBoardTypeFilter, {nullable:true})
    not?: NestedEnumTaskBoardTypeFilter;
}
