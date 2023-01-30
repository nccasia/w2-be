import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutFormInput } from './task-update-without-form.input';
import { TaskCreateWithoutFormInput } from './task-create-without-form.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutFormInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutFormInput, {nullable:false})
    @Type(() => TaskUpdateWithoutFormInput)
    update!: TaskUpdateWithoutFormInput;

    @Field(() => TaskCreateWithoutFormInput, {nullable:false})
    @Type(() => TaskCreateWithoutFormInput)
    create!: TaskCreateWithoutFormInput;
}
