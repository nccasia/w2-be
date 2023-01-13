import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMemberOnTeamsInput } from './user-update-without-member-on-teams.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMemberOnTeamsInput } from './user-create-without-member-on-teams.input';

@InputType()
export class UserUpsertWithoutMemberOnTeamsInput {

    @Field(() => UserUpdateWithoutMemberOnTeamsInput, {nullable:false})
    @Type(() => UserUpdateWithoutMemberOnTeamsInput)
    update!: UserUpdateWithoutMemberOnTeamsInput;

    @Field(() => UserCreateWithoutMemberOnTeamsInput, {nullable:false})
    @Type(() => UserCreateWithoutMemberOnTeamsInput)
    create!: UserCreateWithoutMemberOnTeamsInput;
}
