import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutTeamInput } from './task-update-without-team.input';
import { TaskCreateWithoutTeamInput } from './task-create-without-team.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutTeamInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutTeamInput, {nullable:false})
    @Type(() => TaskUpdateWithoutTeamInput)
    update!: TaskUpdateWithoutTeamInput;

    @Field(() => TaskCreateWithoutTeamInput, {nullable:false})
    @Type(() => TaskCreateWithoutTeamInput)
    create!: TaskCreateWithoutTeamInput;
}
