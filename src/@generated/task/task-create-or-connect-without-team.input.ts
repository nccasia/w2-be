import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutTeamInput } from './task-create-without-team.input';

@InputType()
export class TaskCreateOrConnectWithoutTeamInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutTeamInput, {nullable:false})
    @Type(() => TaskCreateWithoutTeamInput)
    create!: TaskCreateWithoutTeamInput;
}
