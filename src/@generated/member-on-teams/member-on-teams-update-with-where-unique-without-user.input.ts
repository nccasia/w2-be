import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsUpdateWithoutUserInput } from './member-on-teams-update-without-user.input';

@InputType()
export class MemberOnTeamsUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => MemberOnTeamsWhereUniqueInput, {nullable:false})
    @Type(() => MemberOnTeamsWhereUniqueInput)
    where!: MemberOnTeamsWhereUniqueInput;

    @Field(() => MemberOnTeamsUpdateWithoutUserInput, {nullable:false})
    @Type(() => MemberOnTeamsUpdateWithoutUserInput)
    data!: MemberOnTeamsUpdateWithoutUserInput;
}
