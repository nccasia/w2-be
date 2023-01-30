import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutTaskBoardsInput } from './project-create-without-task-boards.input';

@InputType()
export class ProjectCreateOrConnectWithoutTaskBoardsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutTaskBoardsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutTaskBoardsInput)
    create!: ProjectCreateWithoutTaskBoardsInput;
}
