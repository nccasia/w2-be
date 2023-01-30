import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardCreateWithoutSettingsInput } from './task-board-create-without-settings.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateOrConnectWithoutSettingsInput } from './task-board-create-or-connect-without-settings.input';
import { TaskBoardUpsertWithoutSettingsInput } from './task-board-upsert-without-settings.input';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { TaskBoardUpdateWithoutSettingsInput } from './task-board-update-without-settings.input';

@InputType()
export class TaskBoardUpdateOneRequiredWithoutSettingsNestedInput {

    @Field(() => TaskBoardCreateWithoutSettingsInput, {nullable:true})
    @Type(() => TaskBoardCreateWithoutSettingsInput)
    create?: TaskBoardCreateWithoutSettingsInput;

    @Field(() => TaskBoardCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => TaskBoardCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: TaskBoardCreateOrConnectWithoutSettingsInput;

    @Field(() => TaskBoardUpsertWithoutSettingsInput, {nullable:true})
    @Type(() => TaskBoardUpsertWithoutSettingsInput)
    upsert?: TaskBoardUpsertWithoutSettingsInput;

    @Field(() => TaskBoardWhereUniqueInput, {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    connect?: TaskBoardWhereUniqueInput;

    @Field(() => TaskBoardUpdateWithoutSettingsInput, {nullable:true})
    @Type(() => TaskBoardUpdateWithoutSettingsInput)
    update?: TaskBoardUpdateWithoutSettingsInput;
}
