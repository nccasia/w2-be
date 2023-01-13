import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutCommentsInput } from './task-create-without-comments.input';

@InputType()
export class TaskCreateOrConnectWithoutCommentsInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutCommentsInput, {nullable:false})
    @Type(() => TaskCreateWithoutCommentsInput)
    create!: TaskCreateWithoutCommentsInput;
}
