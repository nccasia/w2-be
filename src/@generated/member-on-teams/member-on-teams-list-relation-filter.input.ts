import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MemberOnTeamsWhereInput } from './member-on-teams-where.input';

@InputType()
export class MemberOnTeamsListRelationFilter {

    @Field(() => MemberOnTeamsWhereInput, {nullable:true})
    every?: MemberOnTeamsWhereInput;

    @Field(() => MemberOnTeamsWhereInput, {nullable:true})
    some?: MemberOnTeamsWhereInput;

    @Field(() => MemberOnTeamsWhereInput, {nullable:true})
    none?: MemberOnTeamsWhereInput;
}
