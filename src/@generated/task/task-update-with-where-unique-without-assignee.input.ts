import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutAssigneeInput } from './task-update-without-assignee.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutAssigneeInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutAssigneeInput, {nullable:false})
    @Type(() => TaskUpdateWithoutAssigneeInput)
    data!: TaskUpdateWithoutAssigneeInput;
}
