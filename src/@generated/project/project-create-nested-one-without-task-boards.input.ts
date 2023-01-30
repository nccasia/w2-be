import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutTaskBoardsInput } from './project-create-without-task-boards.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutTaskBoardsInput } from './project-create-or-connect-without-task-boards.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutTaskBoardsInput {

    @Field(() => ProjectCreateWithoutTaskBoardsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutTaskBoardsInput)
    create?: ProjectCreateWithoutTaskBoardsInput;

    @Field(() => ProjectCreateOrConnectWithoutTaskBoardsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutTaskBoardsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutTaskBoardsInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: ProjectWhereUniqueInput;
}
