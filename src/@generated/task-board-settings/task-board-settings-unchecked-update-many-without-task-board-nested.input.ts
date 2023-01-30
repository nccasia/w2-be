import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardSettingsCreateWithoutTaskBoardInput } from './task-board-settings-create-without-task-board.input';
import { Type } from 'class-transformer';
import { TaskBoardSettingsCreateOrConnectWithoutTaskBoardInput } from './task-board-settings-create-or-connect-without-task-board.input';
import { TaskBoardSettingsUpsertWithWhereUniqueWithoutTaskBoardInput } from './task-board-settings-upsert-with-where-unique-without-task-board.input';
import { TaskBoardSettingsCreateManyTaskBoardInputEnvelope } from './task-board-settings-create-many-task-board-input-envelope.input';
import { TaskBoardSettingsWhereUniqueInput } from './task-board-settings-where-unique.input';
import { TaskBoardSettingsUpdateWithWhereUniqueWithoutTaskBoardInput } from './task-board-settings-update-with-where-unique-without-task-board.input';
import { TaskBoardSettingsUpdateManyWithWhereWithoutTaskBoardInput } from './task-board-settings-update-many-with-where-without-task-board.input';
import { TaskBoardSettingsScalarWhereInput } from './task-board-settings-scalar-where.input';

@InputType()
export class TaskBoardSettingsUncheckedUpdateManyWithoutTaskBoardNestedInput {

    @Field(() => [TaskBoardSettingsCreateWithoutTaskBoardInput], {nullable:true})
    @Type(() => TaskBoardSettingsCreateWithoutTaskBoardInput)
    create?: Array<TaskBoardSettingsCreateWithoutTaskBoardInput>;

    @Field(() => [TaskBoardSettingsCreateOrConnectWithoutTaskBoardInput], {nullable:true})
    @Type(() => TaskBoardSettingsCreateOrConnectWithoutTaskBoardInput)
    connectOrCreate?: Array<TaskBoardSettingsCreateOrConnectWithoutTaskBoardInput>;

    @Field(() => [TaskBoardSettingsUpsertWithWhereUniqueWithoutTaskBoardInput], {nullable:true})
    @Type(() => TaskBoardSettingsUpsertWithWhereUniqueWithoutTaskBoardInput)
    upsert?: Array<TaskBoardSettingsUpsertWithWhereUniqueWithoutTaskBoardInput>;

    @Field(() => TaskBoardSettingsCreateManyTaskBoardInputEnvelope, {nullable:true})
    @Type(() => TaskBoardSettingsCreateManyTaskBoardInputEnvelope)
    createMany?: TaskBoardSettingsCreateManyTaskBoardInputEnvelope;

    @Field(() => [TaskBoardSettingsWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardSettingsWhereUniqueInput)
    set?: Array<TaskBoardSettingsWhereUniqueInput>;

    @Field(() => [TaskBoardSettingsWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardSettingsWhereUniqueInput)
    disconnect?: Array<TaskBoardSettingsWhereUniqueInput>;

    @Field(() => [TaskBoardSettingsWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardSettingsWhereUniqueInput)
    delete?: Array<TaskBoardSettingsWhereUniqueInput>;

    @Field(() => [TaskBoardSettingsWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardSettingsWhereUniqueInput)
    connect?: Array<TaskBoardSettingsWhereUniqueInput>;

    @Field(() => [TaskBoardSettingsUpdateWithWhereUniqueWithoutTaskBoardInput], {nullable:true})
    @Type(() => TaskBoardSettingsUpdateWithWhereUniqueWithoutTaskBoardInput)
    update?: Array<TaskBoardSettingsUpdateWithWhereUniqueWithoutTaskBoardInput>;

    @Field(() => [TaskBoardSettingsUpdateManyWithWhereWithoutTaskBoardInput], {nullable:true})
    @Type(() => TaskBoardSettingsUpdateManyWithWhereWithoutTaskBoardInput)
    updateMany?: Array<TaskBoardSettingsUpdateManyWithWhereWithoutTaskBoardInput>;

    @Field(() => [TaskBoardSettingsScalarWhereInput], {nullable:true})
    @Type(() => TaskBoardSettingsScalarWhereInput)
    deleteMany?: Array<TaskBoardSettingsScalarWhereInput>;
}
