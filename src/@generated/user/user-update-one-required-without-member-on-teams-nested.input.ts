import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMemberOnTeamsInput } from './user-create-without-member-on-teams.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMemberOnTeamsInput } from './user-create-or-connect-without-member-on-teams.input';
import { UserUpsertWithoutMemberOnTeamsInput } from './user-upsert-without-member-on-teams.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutMemberOnTeamsInput } from './user-update-without-member-on-teams.input';

@InputType()
export class UserUpdateOneRequiredWithoutMemberOnTeamsNestedInput {

    @Field(() => UserCreateWithoutMemberOnTeamsInput, {nullable:true})
    @Type(() => UserCreateWithoutMemberOnTeamsInput)
    create?: UserCreateWithoutMemberOnTeamsInput;

    @Field(() => UserCreateOrConnectWithoutMemberOnTeamsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMemberOnTeamsInput)
    connectOrCreate?: UserCreateOrConnectWithoutMemberOnTeamsInput;

    @Field(() => UserUpsertWithoutMemberOnTeamsInput, {nullable:true})
    @Type(() => UserUpsertWithoutMemberOnTeamsInput)
    upsert?: UserUpsertWithoutMemberOnTeamsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMemberOnTeamsInput, {nullable:true})
    @Type(() => UserUpdateWithoutMemberOnTeamsInput)
    update?: UserUpdateWithoutMemberOnTeamsInput;
}
