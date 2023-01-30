import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutTaskBoardsInput } from './project-update-without-task-boards.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutTaskBoardsInput } from './project-create-without-task-boards.input';

@InputType()
export class ProjectUpsertWithoutTaskBoardsInput {

    @Field(() => ProjectUpdateWithoutTaskBoardsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutTaskBoardsInput)
    update!: ProjectUpdateWithoutTaskBoardsInput;

    @Field(() => ProjectCreateWithoutTaskBoardsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutTaskBoardsInput)
    create!: ProjectCreateWithoutTaskBoardsInput;
}
