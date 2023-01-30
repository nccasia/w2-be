import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardCreateWithoutSettingsInput } from './task-board-create-without-settings.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateOrConnectWithoutSettingsInput } from './task-board-create-or-connect-without-settings.input';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';

@InputType()
export class TaskBoardCreateNestedOneWithoutSettingsInput {

    @Field(() => TaskBoardCreateWithoutSettingsInput, {nullable:true})
    @Type(() => TaskBoardCreateWithoutSettingsInput)
    create?: TaskBoardCreateWithoutSettingsInput;

    @Field(() => TaskBoardCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => TaskBoardCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: TaskBoardCreateOrConnectWithoutSettingsInput;

    @Field(() => TaskBoardWhereUniqueInput, {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    connect?: TaskBoardWhereUniqueInput;
}
