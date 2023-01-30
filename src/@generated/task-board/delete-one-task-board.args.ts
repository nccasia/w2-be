import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneTaskBoardArgs {

    @Field(() => TaskBoardWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardWhereUniqueInput)
    where!: TaskBoardWhereUniqueInput;
}
