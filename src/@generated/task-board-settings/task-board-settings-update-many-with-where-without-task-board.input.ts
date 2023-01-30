import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardSettingsScalarWhereInput } from './task-board-settings-scalar-where.input';
import { Type } from 'class-transformer';
import { TaskBoardSettingsUpdateManyMutationInput } from './task-board-settings-update-many-mutation.input';

@InputType()
export class TaskBoardSettingsUpdateManyWithWhereWithoutTaskBoardInput {

    @Field(() => TaskBoardSettingsScalarWhereInput, {nullable:false})
    @Type(() => TaskBoardSettingsScalarWhereInput)
    where!: TaskBoardSettingsScalarWhereInput;

    @Field(() => TaskBoardSettingsUpdateManyMutationInput, {nullable:false})
    @Type(() => TaskBoardSettingsUpdateManyMutationInput)
    data!: TaskBoardSettingsUpdateManyMutationInput;
}
