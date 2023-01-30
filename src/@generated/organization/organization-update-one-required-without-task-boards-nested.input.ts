import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutTaskBoardsInput } from './organization-create-without-task-boards.input';
import { Type } from 'class-transformer';
import { OrganizationCreateOrConnectWithoutTaskBoardsInput } from './organization-create-or-connect-without-task-boards.input';
import { OrganizationUpsertWithoutTaskBoardsInput } from './organization-upsert-without-task-boards.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutTaskBoardsInput } from './organization-update-without-task-boards.input';

@InputType()
export class OrganizationUpdateOneRequiredWithoutTaskBoardsNestedInput {

    @Field(() => OrganizationCreateWithoutTaskBoardsInput, {nullable:true})
    @Type(() => OrganizationCreateWithoutTaskBoardsInput)
    create?: OrganizationCreateWithoutTaskBoardsInput;

    @Field(() => OrganizationCreateOrConnectWithoutTaskBoardsInput, {nullable:true})
    @Type(() => OrganizationCreateOrConnectWithoutTaskBoardsInput)
    connectOrCreate?: OrganizationCreateOrConnectWithoutTaskBoardsInput;

    @Field(() => OrganizationUpsertWithoutTaskBoardsInput, {nullable:true})
    @Type(() => OrganizationUpsertWithoutTaskBoardsInput)
    upsert?: OrganizationUpsertWithoutTaskBoardsInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    @Type(() => OrganizationWhereUniqueInput)
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutTaskBoardsInput, {nullable:true})
    @Type(() => OrganizationUpdateWithoutTaskBoardsInput)
    update?: OrganizationUpdateWithoutTaskBoardsInput;
}
