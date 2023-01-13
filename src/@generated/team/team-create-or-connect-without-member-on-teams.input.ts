import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { Type } from 'class-transformer';
import { TeamCreateWithoutMemberOnTeamsInput } from './team-create-without-member-on-teams.input';

@InputType()
export class TeamCreateOrConnectWithoutMemberOnTeamsInput {

    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: TeamWhereUniqueInput;

    @Field(() => TeamCreateWithoutMemberOnTeamsInput, {nullable:false})
    @Type(() => TeamCreateWithoutMemberOnTeamsInput)
    create!: TeamCreateWithoutMemberOnTeamsInput;
}
