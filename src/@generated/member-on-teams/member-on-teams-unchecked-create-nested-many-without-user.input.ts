import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsCreateWithoutUserInput } from './member-on-teams-create-without-user.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsCreateOrConnectWithoutUserInput } from './member-on-teams-create-or-connect-without-user.input';
import { MemberOnTeamsCreateManyUserInputEnvelope } from './member-on-teams-create-many-user-input-envelope.input';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';

@InputType()
export class MemberOnTeamsUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [MemberOnTeamsCreateWithoutUserInput], {nullable:true})
    @Type(() => MemberOnTeamsCreateWithoutUserInput)
    create?: Array<MemberOnTeamsCreateWithoutUserInput>;

    @Field(() => [MemberOnTeamsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MemberOnTeamsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MemberOnTeamsCreateOrConnectWithoutUserInput>;

    @Field(() => MemberOnTeamsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MemberOnTeamsCreateManyUserInputEnvelope)
    createMany?: MemberOnTeamsCreateManyUserInputEnvelope;

    @Field(() => [MemberOnTeamsWhereUniqueInput], {nullable:true})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    connect?: Array<MemberOnTeamsWhereUniqueInput>;
}
