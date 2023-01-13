import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamCreateWithoutMemberOnTeamsInput } from './team-create-without-member-on-teams.input';
import { Type } from 'class-transformer';
import { TeamCreateOrConnectWithoutMemberOnTeamsInput } from './team-create-or-connect-without-member-on-teams.input';
import { TeamUpsertWithoutMemberOnTeamsInput } from './team-upsert-without-member-on-teams.input';
import { TeamWhereUniqueInput } from './team-where-unique.input';
import { TeamUpdateWithoutMemberOnTeamsInput } from './team-update-without-member-on-teams.input';

@InputType()
export class TeamUpdateOneRequiredWithoutMemberOnTeamsNestedInput {

    @Field(() => TeamCreateWithoutMemberOnTeamsInput, {nullable:true})
    @Type(() => TeamCreateWithoutMemberOnTeamsInput)
    create?: TeamCreateWithoutMemberOnTeamsInput;

    @Field(() => TeamCreateOrConnectWithoutMemberOnTeamsInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutMemberOnTeamsInput)
    connectOrCreate?: TeamCreateOrConnectWithoutMemberOnTeamsInput;

    @Field(() => TeamUpsertWithoutMemberOnTeamsInput, {nullable:true})
    @Type(() => TeamUpsertWithoutMemberOnTeamsInput)
    upsert?: TeamUpsertWithoutMemberOnTeamsInput;

    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: TeamWhereUniqueInput;

    @Field(() => TeamUpdateWithoutMemberOnTeamsInput, {nullable:true})
    @Type(() => TeamUpdateWithoutMemberOnTeamsInput)
    update?: TeamUpdateWithoutMemberOnTeamsInput;
}
