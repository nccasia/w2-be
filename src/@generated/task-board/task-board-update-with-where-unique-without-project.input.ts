import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardUpdateWithoutProjectInput } from './task-board-update-without-project.input';

@InputType()
export class TaskBoardUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => TaskBoardWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardWhereUniqueInput)
    where!: TaskBoardWhereUniqueInput;

    @Field(() => TaskBoardUpdateWithoutProjectInput, {nullable:false})
    @Type(() => TaskBoardUpdateWithoutProjectInput)
    data!: TaskBoardUpdateWithoutProjectInput;
}
