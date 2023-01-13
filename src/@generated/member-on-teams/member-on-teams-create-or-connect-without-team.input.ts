import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsCreateWithoutTeamInput } from './member-on-teams-create-without-team.input';

@InputType()
export class MemberOnTeamsCreateOrConnectWithoutTeamInput {

    @Field(() => MemberOnTeamsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    where!: MemberOnTeamsWhereUniqueInput;

    @Field(() => MemberOnTeamsCreateWithoutTeamInput, {nullable:false})
    @Type(() => MemberOnTeamsCreateWithoutTeamInput)
    create!: MemberOnTeamsCreateWithoutTeamInput;
}
