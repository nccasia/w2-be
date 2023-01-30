import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateWithoutProjectInput } from './task-board-create-without-project.input';

@InputType()
export class TaskBoardCreateOrConnectWithoutProjectInput {

    @Field(() => TaskBoardWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardWhereUniqueInput)
    where!: TaskBoardWhereUniqueInput;

    @Field(() => TaskBoardCreateWithoutProjectInput, {nullable:false})
    @Type(() => TaskBoardCreateWithoutProjectInput)
    create!: TaskBoardCreateWithoutProjectInput;
}
