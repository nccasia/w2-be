import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardUpdateManyMutationInput } from './task-board-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TaskBoardWhereInput } from './task-board-where.input';

@ArgsType()
export class UpdateManyTaskBoardArgs {

    @Field(() => TaskBoardUpdateManyMutationInput, {nullable:false})
    @Type(() => TaskBoardUpdateManyMutationInput)
    data!: TaskBoardUpdateManyMutationInput;

    @Field(() => TaskBoardWhereInput, {nullable:true})
    @Type(() => TaskBoardWhereInput)
    where?: TaskBoardWhereInput;
}
