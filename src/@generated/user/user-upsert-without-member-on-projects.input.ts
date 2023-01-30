import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMemberOnProjectsInput } from './user-update-without-member-on-projects.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMemberOnProjectsInput } from './user-create-without-member-on-projects.input';

@InputType()
export class UserUpsertWithoutMemberOnProjectsInput {

    @Field(() => UserUpdateWithoutMemberOnProjectsInput, {nullable:false})
    @Type(() => UserUpdateWithoutMemberOnProjectsInput)
    update!: UserUpdateWithoutMemberOnProjectsInput;

    @Field(() => UserCreateWithoutMemberOnProjectsInput, {nullable:false})
    @Type(() => UserCreateWithoutMemberOnProjectsInput)
    create!: UserCreateWithoutMemberOnProjectsInput;
}
