import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardCreateInput } from './task-board-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTaskBoardArgs {

    @Field(() => TaskBoardCreateInput, {nullable:false})
    @Type(() => TaskBoardCreateInput)
    data!: TaskBoardCreateInput;
}
