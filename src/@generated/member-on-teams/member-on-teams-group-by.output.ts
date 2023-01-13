import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MemberOnTeamsCountAggregate } from './member-on-teams-count-aggregate.output';
import { MemberOnTeamsAvgAggregate } from './member-on-teams-avg-aggregate.output';
import { MemberOnTeamsSumAggregate } from './member-on-teams-sum-aggregate.output';
import { MemberOnTeamsMinAggregate } from './member-on-teams-min-aggregate.output';
import { MemberOnTeamsMaxAggregate } from './member-on-teams-max-aggregate.output';

@ObjectType()
export class MemberOnTeamsGroupBy {

    @Field(() => Int, {nullable:false})
    teamId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    assignedAt!: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => MemberOnTeamsCountAggregate, {nullable:true})
    _count?: MemberOnTeamsCountAggregate;

    @Field(() => MemberOnTeamsAvgAggregate, {nullable:true})
    _avg?: MemberOnTeamsAvgAggregate;

    @Field(() => MemberOnTeamsSumAggregate, {nullable:true})
    _sum?: MemberOnTeamsSumAggregate;

    @Field(() => MemberOnTeamsMinAggregate, {nullable:true})
    _min?: MemberOnTeamsMinAggregate;

    @Field(() => MemberOnTeamsMaxAggregate, {nullable:true})
    _max?: MemberOnTeamsMaxAggregate;
}
