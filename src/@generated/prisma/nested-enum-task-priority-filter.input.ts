import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskPriority } from './task-priority.enum';

@InputType()
export class NestedEnumTaskPriorityFilter {

    @Field(() => TaskPriority, {nullable:true})
    equals?: keyof typeof TaskPriority;

    @Field(() => [TaskPriority], {nullable:true})
    in?: Array<keyof typeof TaskPriority>;

    @Field(() => [TaskPriority], {nullable:true})
    notIn?: Array<keyof typeof TaskPriority>;

    @Field(() => NestedEnumTaskPriorityFilter, {nullable:true})
    not?: NestedEnumTaskPriorityFilter;
}
