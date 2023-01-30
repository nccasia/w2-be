import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMemberOnProjectsInput } from './user-create-without-member-on-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMemberOnProjectsInput } from './user-create-or-connect-without-member-on-projects.input';
import { UserUpsertWithoutMemberOnProjectsInput } from './user-upsert-without-member-on-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutMemberOnProjectsInput } from './user-update-without-member-on-projects.input';

@InputType()
export class UserUpdateOneRequiredWithoutMemberOnProjectsNestedInput {

    @Field(() => UserCreateWithoutMemberOnProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutMemberOnProjectsInput)
    create?: UserCreateWithoutMemberOnProjectsInput;

    @Field(() => UserCreateOrConnectWithoutMemberOnProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMemberOnProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutMemberOnProjectsInput;

    @Field(() => UserUpsertWithoutMemberOnProjectsInput, {nullable:true})
    @Type(() => UserUpsertWithoutMemberOnProjectsInput)
    upsert?: UserUpsertWithoutMemberOnProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMemberOnProjectsInput, {nullable:true})
    @Type(() => UserUpdateWithoutMemberOnProjectsInput)
    update?: UserUpdateWithoutMemberOnProjectsInput;
}
