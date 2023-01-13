import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMemberOnTeamsInput } from './user-create-without-member-on-teams.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMemberOnTeamsInput } from './user-create-or-connect-without-member-on-teams.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMemberOnTeamsInput {

    @Field(() => UserCreateWithoutMemberOnTeamsInput, {nullable:true})
    @Type(() => UserCreateWithoutMemberOnTeamsInput)
    create?: UserCreateWithoutMemberOnTeamsInput;

    @Field(() => UserCreateOrConnectWithoutMemberOnTeamsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMemberOnTeamsInput)
    connectOrCreate?: UserCreateOrConnectWithoutMemberOnTeamsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
