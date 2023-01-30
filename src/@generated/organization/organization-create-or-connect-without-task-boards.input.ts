import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { OrganizationCreateWithoutTaskBoardsInput } from './organization-create-without-task-boards.input';

@InputType()
export class OrganizationCreateOrConnectWithoutTaskBoardsInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    @Type(() => OrganizationWhereUniqueInput)
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutTaskBoardsInput, {nullable:false})
    @Type(() => OrganizationCreateWithoutTaskBoardsInput)
    create!: OrganizationCreateWithoutTaskBoardsInput;
}
