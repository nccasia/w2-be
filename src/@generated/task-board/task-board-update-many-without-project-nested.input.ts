import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardCreateWithoutProjectInput } from './task-board-create-without-project.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateOrConnectWithoutProjectInput } from './task-board-create-or-connect-without-project.input';
import { TaskBoardUpsertWithWhereUniqueWithoutProjectInput } from './task-board-upsert-with-where-unique-without-project.input';
import { TaskBoardCreateManyProjectInputEnvelope } from './task-board-create-many-project-input-envelope.input';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { TaskBoardUpdateWithWhereUniqueWithoutProjectInput } from './task-board-update-with-where-unique-without-project.input';
import { TaskBoardUpdateManyWithWhereWithoutProjectInput } from './task-board-update-many-with-where-without-project.input';
import { TaskBoardScalarWhereInput } from './task-board-scalar-where.input';

@InputType()
export class TaskBoardUpdateManyWithoutProjectNestedInput {

    @Field(() => [TaskBoardCreateWithoutProjectInput], {nullable:true})
    @Type(() => TaskBoardCreateWithoutProjectInput)
    create?: Array<TaskBoardCreateWithoutProjectInput>;

    @Field(() => [TaskBoardCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => TaskBoardCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<TaskBoardCreateOrConnectWithoutProjectInput>;

    @Field(() => [TaskBoardUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => TaskBoardUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<TaskBoardUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => TaskBoardCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => TaskBoardCreateManyProjectInputEnvelope)
    createMany?: TaskBoardCreateManyProjectInputEnvelope;

    @Field(() => [TaskBoardWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    set?: Array<TaskBoardWhereUniqueInput>;

    @Field(() => [TaskBoardWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    disconnect?: Array<TaskBoardWhereUniqueInput>;

    @Field(() => [TaskBoardWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    delete?: Array<TaskBoardWhereUniqueInput>;

    @Field(() => [TaskBoardWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    connect?: Array<TaskBoardWhereUniqueInput>;

    @Field(() => [TaskBoardUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => TaskBoardUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<TaskBoardUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [TaskBoardUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => TaskBoardUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<TaskBoardUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [TaskBoardScalarWhereInput], {nullable:true})
    @Type(() => TaskBoardScalarWhereInput)
    deleteMany?: Array<TaskBoardScalarWhereInput>;
}
