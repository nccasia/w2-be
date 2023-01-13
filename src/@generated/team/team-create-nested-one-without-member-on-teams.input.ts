import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutMemberOnTeamsInput } from './team-create-without-member-on-teams.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutMemberOnTeamsInput } from './team-create-or-connect-without-member-on-teams.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';

@InputType()
export class TeamCreateNestedOneWithoutMemberOnTeamsInput {

    @Field(() => TeamCreateWithoutMemberOnTeamsInput, {nullable:true})
    @Type(() => TeamCreateWithoutMemberOnTeamsInput)
    create?: TeamCreateWithoutMemberOnTeamsInput;

    @Field(() => TeamCreateOrConnectWithoutMemberOnTeamsInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutMemberOnTeamsInput)
    connectOrCreate?: TeamCreateOrConnectWithoutMemberOnTeamsInput;

    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: TeamWhereUniqueInput;
}
