import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnTeamsWhereInput } from './member-on-teams-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMemberOnTeamsArgs {

    @Field(() => MemberOnTeamsWhereInput, {nullable:true})
    @Type(() => MemberOnTeamsWhereInput)
    where?: MemberOnTeamsWhereInput;
}
