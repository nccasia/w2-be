import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMemberOnProjectsInput } from './user-create-without-member-on-projects.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMemberOnProjectsInput } from './user-create-or-connect-without-member-on-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMemberOnProjectsInput {

    @Field(() => UserCreateWithoutMemberOnProjectsInput, {nullable:true})
    @Type(() => UserCreateWithoutMemberOnProjectsInput)
    create?: UserCreateWithoutMemberOnProjectsInput;

    @Field(() => UserCreateOrConnectWithoutMemberOnProjectsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMemberOnProjectsInput)
    connectOrCreate?: UserCreateOrConnectWithoutMemberOnProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
