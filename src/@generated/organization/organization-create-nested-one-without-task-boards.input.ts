import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutTaskBoardsInput } from './organization-create-without-task-boards.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutTaskBoardsInput } from './organization-create-or-connect-without-task-boards.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutTaskBoardsInput {

    @Field(() => OrganizationCreateWithoutTaskBoardsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutTaskBoardsInput)
    create?: OrganizationCreateWithoutTaskBoardsInput;

    @Field(() => OrganizationCreateOrConnectWithoutTaskBoardsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutTaskBoardsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutTaskBoardsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;
}
