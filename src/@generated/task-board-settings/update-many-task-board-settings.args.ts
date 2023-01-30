import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardSettingsUpdateManyMutationInput } from './task-board-settings-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TaskBoardSettingsWhereInput } from './task-board-settings-where.input';

@ArgsType()
export class UpdateManyTaskBoardSettingsArgs {

    @Field(() => TaskBoardSettingsUpdateManyMutationInput, {nullable:false})
    @Type(() => TaskBoardSettingsUpdateManyMutationInput)
    data!: TaskBoardSettingsUpdateManyMutationInput;

    @Field(() => TaskBoardSettingsWhereInput, {nullable:true})
    @Type(() => TaskBoardSettingsWhereInput)
    where?: TaskBoardSettingsWhereInput;
}
