import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsCreateWithoutUserInput } from './member-on-teams-create-without-user.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsCreateOrConnectWithoutUserInput } from './member-on-teams-create-or-connect-without-user.input';
import { MemberOnTeamsUpsertWithWhereUniqueWithoutUserInput } from './member-on-teams-upsert-with-where-unique-without-user.input';
import { MemberOnTeamsCreateManyUserInputEnvelope } from './member-on-teams-create-many-user-input-envelope.input';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';
import { MemberOnTeamsUpdateWithWhereUniqueWithoutUserInput } from './member-on-teams-update-with-where-unique-without-user.input';
import { MemberOnTeamsUpdateManyWithWhereWithoutUserInput } from './member-on-teams-update-many-with-where-without-user.input';
import { MemberOnTeamsScalarWhereInput } from './member-on-teams-scalar-where.input';

@InputType()
export class MemberOnTeamsUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [MemberOnTeamsCreateWithoutUserInput], {nullable:true})
    @Type(() => MemberOnTeamsCreateWithoutUserInput)
    create?: Array<MemberOnTeamsCreateWithoutUserInput>;

    @Field(() => [MemberOnTeamsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MemberOnTeamsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MemberOnTeamsCreateOrConnectWithoutUserInput>;

    @Field(() => [MemberOnTeamsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MemberOnTeamsUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<MemberOnTeamsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => MemberOnTeamsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MemberOnTeamsCreateManyUserInputEnvelope)
    createMany?: MemberOnTeamsCreateManyUserInputEnvelope;

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

    @Field(() => [MemberOnTeamsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MemberOnTeamsUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<MemberOnTeamsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [MemberOnTeamsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => MemberOnTeamsUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<MemberOnTeamsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [MemberOnTeamsScalarWhereInput], {nullable:true})
    @Type(() => MemberOnTeamsScalarWhereInput)
    deleteMany?: Array<MemberOnTeamsScalarWhereInput>;
}
