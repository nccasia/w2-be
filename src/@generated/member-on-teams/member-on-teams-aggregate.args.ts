import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnTeamsWhereInput } from './member-on-teams-where.input';
import { Type } from 'class-transformer';
import { MemberOnTeamsOrderByWithRelationInput } from './member-on-teams-order-by-with-relation.input';
import { MemberOnTeamsWhereUniqueInput } from './member-on-teams-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MemberOnTeamsCountAggregateInput } from './member-on-teams-count-aggregate.input';
import { MemberOnTeamsAvgAggregateInput } from './member-on-teams-avg-aggregate.input';
import { MemberOnTeamsSumAggregateInput } from './member-on-teams-sum-aggregate.input';
import { MemberOnTeamsMinAggregateInput } from './member-on-teams-min-aggregate.input';
import { MemberOnTeamsMaxAggregateInput } from './member-on-teams-max-aggregate.input';

@ArgsType()
export class MemberOnTeamsAggregateArgs {

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

    @Field(() => MemberOnTeamsCountAggregateInput, {nullable:true})
    _count?: MemberOnTeamsCountAggregateInput;

    @Field(() => MemberOnTeamsAvgAggregateInput, {nullable:true})
    _avg?: MemberOnTeamsAvgAggregateInput;

    @Field(() => MemberOnTeamsSumAggregateInput, {nullable:true})
    _sum?: MemberOnTeamsSumAggregateInput;

    @Field(() => MemberOnTeamsMinAggregateInput, {nullable:true})
    _min?: MemberOnTeamsMinAggregateInput;

    @Field(() => MemberOnTeamsMaxAggregateInput, {nullable:true})
    _max?: MemberOnTeamsMaxAggregateInput;
}
