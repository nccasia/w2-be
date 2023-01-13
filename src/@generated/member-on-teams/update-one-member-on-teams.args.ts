import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnTeamsUpdateInput } from './member-on-teams-update.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';

@ArgsType()
export class UpdateOneMemberOnTeamsArgs {

    @Field(() => MemberOnTeamsUpdateInput, {nullable:false})
    @Type(() => MemberOnTeamsUpdateInput)
    data!: MemberOnTeamsUpdateInput;

    @Field(() => MemberOnTeamsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    where!: MemberOnTeamsWhereUniqueInput;
}
