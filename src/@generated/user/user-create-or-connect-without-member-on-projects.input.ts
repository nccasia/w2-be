import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMemberOnProjectsInput } from './user-create-without-member-on-projects.input';

@InputType()
export class UserCreateOrConnectWithoutMemberOnProjectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMemberOnProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutMemberOnProjectsInput)
    create!: UserCreateWithoutMemberOnProjectsInput;
}
