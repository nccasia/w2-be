import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutFormInput } from './task-update-without-form.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutFormInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutFormInput, {nullable:false})
    @Type(() => TaskUpdateWithoutFormInput)
    data!: TaskUpdateWithoutFormInput;
}
