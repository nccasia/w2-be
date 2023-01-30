import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MemberOnProjectsCountAggregate } from './member-on-projects-count-aggregate.output';
import { MemberOnProjectsAvgAggregate } from './member-on-projects-avg-aggregate.output';
import { MemberOnProjectsSumAggregate } from './member-on-projects-sum-aggregate.output';
import { MemberOnProjectsMinAggregate } from './member-on-projects-min-aggregate.output';
import { MemberOnProjectsMaxAggregate } from './member-on-projects-max-aggregate.output';

@ObjectType()
export class MemberOnProjectsGroupBy {

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    assignedAt!: Date | string;

    @Field(() => String, {nullable:false})
    assignedBy!: string;

    @Field(() => MemberOnProjectsCountAggregate, {nullable:true})
    _count?: MemberOnProjectsCountAggregate;

    @Field(() => MemberOnProjectsAvgAggregate, {nullable:true})
    _avg?: MemberOnProjectsAvgAggregate;

    @Field(() => MemberOnProjectsSumAggregate, {nullable:true})
    _sum?: MemberOnProjectsSumAggregate;

    @Field(() => MemberOnProjectsMinAggregate, {nullable:true})
    _min?: MemberOnProjectsMinAggregate;

    @Field(() => MemberOnProjectsMaxAggregate, {nullable:true})
    _max?: MemberOnProjectsMaxAggregate;
}
