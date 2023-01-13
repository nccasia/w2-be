import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsUpdateWithoutTeamInput } from './member-on-teams-update-without-team.input';
import { MemberOnTeamsCreateWithoutTeamInput } from './member-on-teams-create-without-team.input';

@InputType()
export class MemberOnTeamsUpsertWithWhereUniqueWithoutTeamInput {

    @Field(() => MemberOnTeamsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    where!: MemberOnTeamsWhereUniqueInput;

    @Field(() => MemberOnTeamsUpdateWithoutTeamInput, {nullable:false})
    @Type(() => MemberOnTeamsUpdateWithoutTeamInput)
    update!: MemberOnTeamsUpdateWithoutTeamInput;

    @Field(() => MemberOnTeamsCreateWithoutTeamInput, {nullable:false})
    @Type(() => MemberOnTeamsCreateWithoutTeamInput)
    create!: MemberOnTeamsCreateWithoutTeamInput;
}
