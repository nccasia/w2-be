import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutFormInput } from './task-create-without-form.input';

@InputType()
export class TaskCreateOrConnectWithoutFormInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutFormInput, {nullable:false})
    @Type(() => TaskCreateWithoutFormInput)
    create!: TaskCreateWithoutFormInput;
}
