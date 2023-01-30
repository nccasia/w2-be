import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateWithoutSettingsInput } from './task-board-create-without-settings.input';

@InputType()
export class TaskBoardCreateOrConnectWithoutSettingsInput {

    @Field(() => TaskBoardWhereUniqueInput, {nullable:false})
    @Type(() => TaskBoardWhereUniqueInput)
    where!: TaskBoardWhereUniqueInput;

    @Field(() => TaskBoardCreateWithoutSettingsInput, {nullable:false})
    @Type(() => TaskBoardCreateWithoutSettingsInput)
    create!: TaskBoardCreateWithoutSettingsInput;
}
