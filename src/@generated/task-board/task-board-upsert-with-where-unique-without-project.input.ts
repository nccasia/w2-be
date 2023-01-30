import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardUpdateWithoutProjectInput } from './task-board-update-without-project.input';
import { TaskBoardCreateWithoutProjectInput } from './task-board-create-without-project.input';

@InputType()
export class TaskBoardUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => TaskBoardWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardWhereUniqueInput)
    where!: TaskBoardWhereUniqueInput;

    @Field(() => TaskBoardUpdateWithoutProjectInput, {nullable:false})
    @Type(() => TaskBoardUpdateWithoutProjectInput)
    update!: TaskBoardUpdateWithoutProjectInput;

    @Field(() => TaskBoardCreateWithoutProjectInput, {nullable:false})
    @Type(() => TaskBoardCreateWithoutProjectInput)
    create!: TaskBoardCreateWithoutProjectInput;
}
