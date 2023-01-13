import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsUpdateWithoutUserInput } from './member-on-teams-update-without-user.input';
import { MemberOnTeamsCreateWithoutUserInput } from './member-on-teams-create-without-user.input';

@InputType()
export class MemberOnTeamsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => MemberOnTeamsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    where!: MemberOnTeamsWhereUniqueInput;

    @Field(() => MemberOnTeamsUpdateWithoutUserInput, {nullable:false})
    @Type(() => MemberOnTeamsUpdateWithoutUserInput)
    update!: MemberOnTeamsUpdateWithoutUserInput;

    @Field(() => MemberOnTeamsCreateWithoutUserInput, {nullable:false})
    @Type(() => MemberOnTeamsCreateWithoutUserInput)
    create!: MemberOnTeamsCreateWithoutUserInput;
}
