import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutTeamInput } from './task-update-without-team.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutTeamInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutTeamInput, {nullable:false})
    @Type(() => TaskUpdateWithoutTeamInput)
    data!: TaskUpdateWithoutTeamInput;
}
