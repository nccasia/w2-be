import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutTaskBoardsInput } from './project-create-without-task-boards.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutTaskBoardsInput } from './project-create-or-connect-without-task-boards.input';
import { ProjectUpsertWithoutTaskBoardsInput } from './project-upsert-without-task-boards.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutTaskBoardsInput } from './project-update-without-task-boards.input';

@InputType()
export class ProjectUpdateOneWithoutTaskBoardsNestedInput {

    @Field(() => ProjectCreateWithoutTaskBoardsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutTaskBoardsInput)
    create?: ProjectCreateWithoutTaskBoardsInput;

    @Field(() => ProjectCreateOrConnectWithoutTaskBoardsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutTaskBoardsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutTaskBoardsInput;

    @Field(() => ProjectUpsertWithoutTaskBoardsInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutTaskBoardsInput)
    upsert?: ProjectUpsertWithoutTaskBoardsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutTaskBoardsInput, {nullable:true})
    @Type(() => ProjectUpdateWithoutTaskBoardsInput)
    update?: ProjectUpdateWithoutTaskBoardsInput;
}
