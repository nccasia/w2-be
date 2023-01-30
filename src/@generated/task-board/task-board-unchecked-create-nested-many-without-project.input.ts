import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardCreateWithoutProjectInput } from './task-board-create-without-project.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateOrConnectWithoutProjectInput } from './task-board-create-or-connect-without-project.input';
import { TaskBoardCreateManyProjectInputEnvelope } from './task-board-create-many-project-input-envelope.input';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';

@InputType()
export class TaskBoardUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [TaskBoardCreateWithoutProjectInput], {nullable:true})
    @Type(() => TaskBoardCreateWithoutProjectInput)
    create?: Array<TaskBoardCreateWithoutProjectInput>;

    @Field(() => [TaskBoardCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => TaskBoardCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<TaskBoardCreateOrConnectWithoutProjectInput>;

    @Field(() => TaskBoardCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => TaskBoardCreateManyProjectInputEnvelope)
    createMany?: TaskBoardCreateManyProjectInputEnvelope;

    @Field(() => [TaskBoardWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    connect?: Array<TaskBoardWhereUniqueInput>;
}
