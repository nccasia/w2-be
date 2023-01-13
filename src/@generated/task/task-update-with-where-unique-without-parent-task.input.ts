import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutParentTaskInput } from './task-update-without-parent-task.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutParentTaskInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutParentTaskInput, {nullable:false})
    @Type(() => TaskUpdateWithoutParentTaskInput)
    data!: TaskUpdateWithoutParentTaskInput;
}
