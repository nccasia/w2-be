import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutTaskBoardsInput } from './organization-update-without-task-boards.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutTaskBoardsInput } from './organization-create-without-task-boards.input';

@InputType()
export class OrganizationUpsertWithoutTaskBoardsInput {

    @Field(() => OrganizationUpdateWithoutTaskBoardsInput, {nullable:false})
    @Type(() => OrganizationUpdateWithoutTaskBoardsInput)
    update!: OrganizationUpdateWithoutTaskBoardsInput;

    @Field(() => OrganizationCreateWithoutTaskBoardsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutTaskBoardsInput)
    create!: OrganizationCreateWithoutTaskBoardsInput;
}
