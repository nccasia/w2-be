import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsCreateWithoutTeamInput } from './member-on-teams-create-without-team.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsCreateOrConnectWithoutTeamInput } from './member-on-teams-create-or-connect-without-team.input';
import { MemberOnTeamsUpsertWithWhereUniqueWithoutTeamInput } from './member-on-teams-upsert-with-where-unique-without-team.input';
import { MemberOnTeamsCreateManyTeamInputEnvelope } from './member-on-teams-create-many-team-input-envelope.input';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';
import { MemberOnTeamsUpdateWithWhereUniqueWithoutTeamInput } from './member-on-teams-update-with-where-unique-without-team.input';
import { MemberOnTeamsUpdateManyWithWhereWithoutTeamInput } from './member-on-teams-update-many-with-where-without-team.input';
import { MemberOnTeamsScalarWhereInput } from './member-on-teams-scalar-where.input';

@InputType()
export class MemberOnTeamsUpdateManyWithoutTeamNestedInput {

    @Field(() => [MemberOnTeamsCreateWithoutTeamInput], {nullable:true})
    @Type(() => MemberOnTeamsCreateWithoutTeamInput)
    create?: Array<MemberOnTeamsCreateWithoutTeamInput>;

    @Field(() => [MemberOnTeamsCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => MemberOnTeamsCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<MemberOnTeamsCreateOrConnectWithoutTeamInput>;

    @Field(() => [MemberOnTeamsUpsertWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => MemberOnTeamsUpsertWithWhereUniqueWithoutTeamInput)
    upsert?: Array<MemberOnTeamsUpsertWithWhereUniqueWithoutTeamInput>;

    @Field(() => MemberOnTeamsCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => MemberOnTeamsCreateManyTeamInputEnvelope)
    createMany?: MemberOnTeamsCreateManyTeamInputEnvelope;

    @Field(() => [MemberOnTeamsWhereUniqueInput], {nullable:true})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    set?: Array<MemberOnTeamsWhereUniqueInput>;

    @Field(() => [MemberOnTeamsWhereUniqueInput], {nullable:true})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    disconnect?: Array<MemberOnTeamsWhereUniqueInput>;

    @Field(() => [MemberOnTeamsWhereUniqueInput], {nullable:true})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    delete?: Array<MemberOnTeamsWhereUniqueInput>;

    @Field(() => [MemberOnTeamsWhereUniqueInput], {nullable:true})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    connect?: Array<MemberOnTeamsWhereUniqueInput>;

    @Field(() => [MemberOnTeamsUpdateWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => MemberOnTeamsUpdateWithWhereUniqueWithoutTeamInput)
    update?: Array<MemberOnTeamsUpdateWithWhereUniqueWithoutTeamInput>;

    @Field(() => [MemberOnTeamsUpdateManyWithWhereWithoutTeamInput], {nullable:true})
    @Type(() => MemberOnTeamsUpdateManyWithWhereWithoutTeamInput)
    updateMany?: Array<MemberOnTeamsUpdateManyWithWhereWithoutTeamInput>;

    @Field(() => [MemberOnTeamsScalarWhereInput], {nullable:true})
    @Type(() => MemberOnTeamsScalarWhereInput)
    deleteMany?: Array<MemberOnTeamsScalarWhereInput>;
}
