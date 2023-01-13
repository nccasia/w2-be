import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMemberOnTeamsInput } from './user-create-without-member-on-teams.input';

@InputType()
export class UserCreateOrConnectWithoutMemberOnTeamsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMemberOnTeamsInput, {nullable:false})
    @Type(() => UserCreateWithoutMemberOnTeamsInput)
    create!: UserCreateWithoutMemberOnTeamsInput;
}
