import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardCreateWithoutTaskDefinitionInput } from './task-board-create-without-task-definition.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateOrConnectWithoutTaskDefinitionInput } from './task-board-create-or-connect-without-task-definition.input';
import { TaskBoardUpsertWithWhereUniqueWithoutTaskDefinitionInput } from './task-board-upsert-with-where-unique-without-task-definition.input';
import { TaskBoardCreateManyTaskDefinitionInputEnvelope } from './task-board-create-many-task-definition-input-envelope.input';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';
import { TaskBoardUpdateWithWhereUniqueWithoutTaskDefinitionInput } from './task-board-update-with-where-unique-without-task-definition.input';
import { TaskBoardUpdateManyWithWhereWithoutTaskDefinitionInput } from './task-board-update-many-with-where-without-task-definition.input';
import { TaskBoardScalarWhereInput } from './task-board-scalar-where.input';

@InputType()
export class TaskBoardUpdateManyWithoutTaskDefinitionNestedInput {

    @Field(() => [TaskBoardCreateWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskBoardCreateWithoutTaskDefinitionInput)
    create?: Array<TaskBoardCreateWithoutTaskDefinitionInput>;

    @Field(() => [TaskBoardCreateOrConnectWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskBoardCreateOrConnectWithoutTaskDefinitionInput)
    connectOrCreate?: Array<TaskBoardCreateOrConnectWithoutTaskDefinitionInput>;

    @Field(() => [TaskBoardUpsertWithWhereUniqueWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskBoardUpsertWithWhereUniqueWithoutTaskDefinitionInput)
    upsert?: Array<TaskBoardUpsertWithWhereUniqueWithoutTaskDefinitionInput>;

    @Field(() => TaskBoardCreateManyTaskDefinitionInputEnvelope, {nullable:true})
    @Type(() => TaskBoardCreateManyTaskDefinitionInputEnvelope)
    createMany?: TaskBoardCreateManyTaskDefinitionInputEnvelope;

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

    @Field(() => [TaskBoardUpdateWithWhereUniqueWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskBoardUpdateWithWhereUniqueWithoutTaskDefinitionInput)
    update?: Array<TaskBoardUpdateWithWhereUniqueWithoutTaskDefinitionInput>;

    @Field(() => [TaskBoardUpdateManyWithWhereWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskBoardUpdateManyWithWhereWithoutTaskDefinitionInput)
    updateMany?: Array<TaskBoardUpdateManyWithWhereWithoutTaskDefinitionInput>;

    @Field(() => [TaskBoardScalarWhereInput], {nullable:true})
    @Type(() => TaskBoardScalarWhereInput)
    deleteMany?: Array<TaskBoardScalarWhereInput>;
}
