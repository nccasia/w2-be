import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutTeamInput } from './task-create-without-team.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutTeamInput } from './task-create-or-connect-without-team.input';
import { TaskCreateManyTeamInputEnvelope } from './task-create-many-team-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskUncheckedCreateNestedManyWithoutTeamInput {

    @Field(() => [TaskCreateWithoutTeamInput], {nullable:true})
    @Type(() => TaskCreateWithoutTeamInput)
    create?: Array<TaskCreateWithoutTeamInput>;

    @Field(() => [TaskCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutTeamInput>;

    @Field(() => TaskCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyTeamInputEnvelope)
    createMany?: TaskCreateManyTeamInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;
}
