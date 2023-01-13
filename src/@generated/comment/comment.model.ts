import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Task } from '../task/task.model';

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    creatorId!: number;

    @Field(() => User, {nullable:false})
    creator?: User;

    @Field(() => Int, {nullable:false})
    taskId!: number;

    @Field(() => Task, {nullable:false})
    task?: Task;
}
