import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutTaskBoardsInput } from './task-definition-create-without-task-boards.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutTaskBoardsInput } from './task-definition-create-or-connect-without-task-boards.input';
import { TaskDefinitionUpsertWithoutTaskBoardsInput } from './task-definition-upsert-without-task-boards.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { TaskDefinitionUpdateWithoutTaskBoardsInput } from './task-definition-update-without-task-boards.input';

@InputType()
export class TaskDefinitionUpdateOneRequiredWithoutTaskBoardsNestedInput {

    @Field(() => TaskDefinitionCreateWithoutTaskBoardsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutTaskBoardsInput)
    create?: TaskDefinitionCreateWithoutTaskBoardsInput;

    @Field(() => TaskDefinitionCreateOrConnectWithoutTaskBoardsInput, {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutTaskBoardsInput)
    connectOrCreate?: TaskDefinitionCreateOrConnectWithoutTaskBoardsInput;

    @Field(() => TaskDefinitionUpsertWithoutTaskBoardsInput, {nullable:true})
    @Type(() => TaskDefinitionUpsertWithoutTaskBoardsInput)
    upsert?: TaskDefinitionUpsertWithoutTaskBoardsInput;

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutTaskBoardsInput, {nullable:true})
    @Type(() => TaskDefinitionUpdateWithoutTaskBoardsInput)
    update?: TaskDefinitionUpdateWithoutTaskBoardsInput;
}
