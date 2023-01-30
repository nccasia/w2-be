import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardCreateWithoutTaskDefinitionInput } from './task-board-create-without-task-definition.input';
import { Type } from 'class-transformer';
import { TaskBoardCreateOrConnectWithoutTaskDefinitionInput } from './task-board-create-or-connect-without-task-definition.input';
import { TaskBoardCreateManyTaskDefinitionInputEnvelope } from './task-board-create-many-task-definition-input-envelope.input';
import { TaskBoardWhereUniqueInput } from './task-board-where-unique.input';

@InputType()
export class TaskBoardUncheckedCreateNestedManyWithoutTaskDefinitionInput {

    @Field(() => [TaskBoardCreateWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskBoardCreateWithoutTaskDefinitionInput)
    create?: Array<TaskBoardCreateWithoutTaskDefinitionInput>;

    @Field(() => [TaskBoardCreateOrConnectWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskBoardCreateOrConnectWithoutTaskDefinitionInput)
    connectOrCreate?: Array<TaskBoardCreateOrConnectWithoutTaskDefinitionInput>;

    @Field(() => TaskBoardCreateManyTaskDefinitionInputEnvelope, {nullable:true})
    @Type(() => TaskBoardCreateManyTaskDefinitionInputEnvelope)
    createMany?: TaskBoardCreateManyTaskDefinitionInputEnvelope;

    @Field(() => [TaskBoardWhereUniqueInput], {nullable:true})
    @Type(() => TaskBoardWhereUniqueInput)
    connect?: Array<TaskBoardWhereUniqueInput>;
}
