import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsCreateInput } from './member-on-teams-create.input';
import { MemberOnTeamsUpdateInput } from './member-on-teams-update.input';

@ArgsType()
export class UpsertOneMemberOnTeamsArgs {

    @Field(() => MemberOnTeamsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    where!: MemberOnTeamsWhereUniqueInput;

    @Field(() => MemberOnTeamsCreateInput, {nullable:false})
    @Type(() => MemberOnTeamsCreateInput)
    create!: MemberOnTeamsCreateInput;

    @Field(() => MemberOnTeamsUpdateInput, {nullable:false})
    @Type(() => MemberOnTeamsUpdateInput)
    update!: MemberOnTeamsUpdateInput;
}
