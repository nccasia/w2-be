import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutTeamInput } from './task-create-without-team.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutTeamInput } from './task-create-or-connect-without-team.input';
import { TaskUpsertWithWhereUniqueWithoutTeamInput } from './task-upsert-with-where-unique-without-team.input';
import { TaskCreateManyTeamInputEnvelope } from './task-create-many-team-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutTeamInput } from './task-update-with-where-unique-without-team.input';
import { TaskUpdateManyWithWhereWithoutTeamInput } from './task-update-many-with-where-without-team.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUncheckedUpdateManyWithoutTeamNestedInput {

    @Field(() => [TaskCreateWithoutTeamInput], {nullable:true})
    @Type(() => TaskCreateWithoutTeamInput)
    create?: Array<TaskCreateWithoutTeamInput>;

    @Field(() => [TaskCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutTeamInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutTeamInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutTeamInput>;

    @Field(() => TaskCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyTeamInputEnvelope)
    createMany?: TaskCreateManyTeamInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    set?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    disconnect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    delete?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutTeamInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutTeamInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutTeamInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutTeamInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutTeamInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}
