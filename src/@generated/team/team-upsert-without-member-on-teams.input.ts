import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamUpdateWithoutMemberOnTeamsInput } from './team-update-without-member-on-teams.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutMemberOnTeamsInput } from './team-create-without-member-on-teams.input';

@InputType()
export class TeamUpsertWithoutMemberOnTeamsInput {

    @Field(() => TeamUpdateWithoutMemberOnTeamsInput, {nullable:false})
    @Type(() => TeamUpdateWithoutMemberOnTeamsInput)
    update!: TeamUpdateWithoutMemberOnTeamsInput;

    @Field(() => TeamCreateWithoutMemberOnTeamsInput, {nullable:false})
    @Type(() => TeamCreateWithoutMemberOnTeamsInput)
    create!: TeamCreateWithoutMemberOnTeamsInput;
}
