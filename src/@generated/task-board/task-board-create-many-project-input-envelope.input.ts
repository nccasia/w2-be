import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardCreateManyProjectInput } from './task-board-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskBoardCreateManyProjectInputEnvelope {

    @Field(() => [TaskBoardCreateManyProjectInput], {nullable:false})
    @Type(() => TaskBoardCreateManyProjectInput)
    data!: Array<TaskBoardCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
