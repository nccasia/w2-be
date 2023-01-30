import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskBoardSettingsCreateManyInput } from './task-board-settings-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTaskBoardSettingsArgs {

    @Field(() => [TaskBoardSettingsCreateManyInput], {nullable:false})
    @Type(() => TaskBoardSettingsCreateManyInput)
    data!: Array<TaskBoardSettingsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
