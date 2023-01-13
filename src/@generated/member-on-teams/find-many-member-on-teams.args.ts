import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnTeamsWhereInput } from './member-on-teams-where.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsOrderByWithRelationInput } from './member-on-teams-order-by-with-relation.input';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MemberOnTeamsScalarFieldEnum } from './member-on-teams-scalar-field.enum';

@ArgsType()
export class FindManyMemberOnTeamsArgs {

    @Field(() => MemberOnTeamsWhereInput, {nullable:true})
    @Type(() => MemberOnTeamsWhereInput)
    where?: MemberOnTeamsWhereInput;

    @Field(() => [MemberOnTeamsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MemberOnTeamsOrderByWithRelationInput>;

    @Field(() => MemberOnTeamsWhereUniqueInput, {nullable:true})
    cursor?: MemberOnTeamsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MemberOnTeamsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MemberOnTeamsScalarFieldEnum>;
}
