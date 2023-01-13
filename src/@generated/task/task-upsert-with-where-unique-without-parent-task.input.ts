import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutParentTaskInput } from './task-update-without-parent-task.input';
import { TaskCreateWithoutParentTaskInput } from './task-create-without-parent-task.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutParentTaskInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutParentTaskInput, {nullable:false})
    @Type(() => TaskUpdateWithoutParentTaskInput)
    update!: TaskUpdateWithoutParentTaskInput;

    @Field(() => TaskCreateWithoutParentTaskInput, {nullable:false})
    @Type(() => TaskCreateWithoutParentTaskInput)
    create!: TaskCreateWithoutParentTaskInput;
}
