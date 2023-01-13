import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsCreateWithoutTeamInput } from './member-on-teams-create-without-team.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsCreateOrConnectWithoutTeamInput } from './member-on-teams-create-or-connect-without-team.input';
import { MemberOnTeamsCreateManyTeamInputEnvelope } from './member-on-teams-create-many-team-input-envelope.input';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';

@InputType()
export class MemberOnTeamsCreateNestedManyWithoutTeamInput {

    @Field(() => [MemberOnTeamsCreateWithoutTeamInput], {nullable:true})
    @Type(() => MemberOnTeamsCreateWithoutTeamInput)
    create?: Array<MemberOnTeamsCreateWithoutTeamInput>;

    @Field(() => [MemberOnTeamsCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => MemberOnTeamsCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<MemberOnTeamsCreateOrConnectWithoutTeamInput>;

    @Field(() => MemberOnTeamsCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => MemberOnTeamsCreateManyTeamInputEnvelope)
    createMany?: MemberOnTeamsCreateManyTeamInputEnvelope;

    @Field(() => [MemberOnTeamsWhereUniqueInput], {nullable:true})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    connect?: Array<MemberOnTeamsWhereUniqueInput>;
}
