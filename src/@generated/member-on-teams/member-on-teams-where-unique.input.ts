import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsTeamIdUserIdCompoundUniqueInput } from './member-on-teams-team-id-user-id-compound-unique.input';

@InputType()
export class MemberOnTeamsWhereUniqueInput {

    @Field(() => MemberOnTeamsTeamIdUserIdCompoundUniqueInput, {nullable:true})
    teamId_userId?: MemberOnTeamsTeamIdUserIdCompoundUniqueInput;
}
