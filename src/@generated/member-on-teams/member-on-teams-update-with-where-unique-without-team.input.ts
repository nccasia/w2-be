import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsUpdateWithoutTeamInput } from './member-on-teams-update-without-team.input';

@InputType()
export class MemberOnTeamsUpdateWithWhereUniqueWithoutTeamInput {

    @Field(() => MemberOnTeamsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    where!: MemberOnTeamsWhereUniqueInput;

    @Field(() => MemberOnTeamsUpdateWithoutTeamInput, {nullable:false})
    @Type(() => MemberOnTeamsUpdateWithoutTeamInput)
    data!: MemberOnTeamsUpdateWithoutTeamInput;
}
