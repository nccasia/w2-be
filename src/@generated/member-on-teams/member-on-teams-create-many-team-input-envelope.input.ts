import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsCreateManyTeamInput } from './member-on-teams-create-many-team.input';
import { Type } from 'class-transformer';

@InputType()
export class MemberOnTeamsCreateManyTeamInputEnvelope {

    @Field(() => [MemberOnTeamsCreateManyTeamInput], {nullable:false})
    @Type(() => MemberOnTeamsCreateManyTeamInput)
    data!: Array<MemberOnTeamsCreateManyTeamInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
