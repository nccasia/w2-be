import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnTeamsCreateInput } from './member-on-teams-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMemberOnTeamsArgs {

    @Field(() => MemberOnTeamsCreateInput, {nullable:false})
    @Type(() => MemberOnTeamsCreateInput)
    data!: MemberOnTeamsCreateInput;
}
