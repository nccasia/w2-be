import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardSettingsCreateWithoutTaskBoardInput } from './task-board-settings-create-without-task-board.input';
import { Type } from 'class-transformer';
import { TaskBoardSettingsCreateOrConnectWithoutTaskBoardInput } from './task-board-settings-create-or-connect-without-task-board.input';
import { TaskBoardSettingsCreateManyTaskBoardInputEnvelope } from './task-board-settings-create-many-task-board-input-envelope.input';
import { TaskBoardSettingsWhereUniqueInput } from './task-board-settings-where-unique.input';

@InputType()
export class TaskBoardSettingsUncheckedCreateNestedManyWithoutTaskBoardInput {

    @Field(() => [TaskBoardSettingsCreateWithoutTaskBoardInput], {nullable:true})
    @Type(() => TaskBoardSettingsCreateWithoutTaskBoardInput)
    create?: Array<TaskBoardSettingsCreateWithoutTaskBoardInput>;

    @Field(() => [TaskBoardSettingsCreateOrConnectWithoutTaskBoardInput], {nullable:true})
    @Type(() => TaskBoardSettingsCreateOrConnectWithoutTaskBoardInput)
    connectOrCreate?: Array<TaskBoardSettingsCreateOrConnectWithoutTaskBoardInput>;

    @Field(() => TaskBoardSettingsCreateManyTaskBoardInputEnvelope, {nullable:true})
    @Type(() => TaskBoardSettingsCreateManyTaskBoardInputEnvelope)
    createMany?: TaskBoardSettingsCreateManyTaskBoardInputEnvelope;

    @Field(() => [TaskBoardSettingsWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardSettingsWhereUniqueInput)
    connect?: Array<TaskBoardSettingsWhereUniqueInput>;
}
