import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardCreateManyInput } from './task-board-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTaskBoardArgs {

    @Field(() => [TaskBoardCreateManyInput], {nullable:false})
    @Type(() => TaskBoardCreateManyInput)
    data!: Array<TaskBoardCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
