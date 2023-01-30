import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutTaskBoardsInput } from './task-definition-create-without-task-boards.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutTaskBoardsInput } from './task-definition-create-or-connect-without-task-boards.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';

@InputType()
export class TaskDefinitionCreateNestedOneWithoutTaskBoardsInput {

    @Field(() => TaskDefinitionCreateWithoutTaskBoardsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutTaskBoardsInput)
    create?: TaskDefinitionCreateWithoutTaskBoardsInput;

    @Field(() => TaskDefinitionCreateOrConnectWithoutTaskBoardsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutTaskBoardsInput)
    connectOrCreate?: TaskDefinitionCreateOrConnectWithoutTaskBoardsInput;

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: TaskDefinitionWhereUniqueInput;
}
