import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardScalarWhereInput } from './task-board-scalar-where.input';
import { Type } from 'class-transformer';
import { TaskBoardUpdateManyMutationInput } from './task-board-update-many-mutation.input';

@InputType()
export class TaskBoardUpdateManyWithWhereWithoutProjectInput {

    @Field(() => TaskBoardScalarWhereInput, {nullable:false})
    @Type(() => TaskBoardScalarWhereInput)
    where!: TaskBoardScalarWhereInput;

    @Field(() => TaskBoardUpdateManyMutationInput, {nullable:false})
    @Type(() => TaskBoardUpdateManyMutationInput)
    data!: TaskBoardUpdateManyMutationInput;
}
