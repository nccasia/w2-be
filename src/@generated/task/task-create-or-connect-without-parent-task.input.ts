import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutParentTaskInput } from './task-create-without-parent-task.input';

@InputType()
export class TaskCreateOrConnectWithoutParentTaskInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutParentTaskInput, {nullable:false})
    @Type(() => TaskCreateWithoutParentTaskInput)
    create!: TaskCreateWithoutParentTaskInput;
}
