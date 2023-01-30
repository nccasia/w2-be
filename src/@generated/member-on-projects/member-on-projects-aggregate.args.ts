import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MemberOnProjectsWhereInput } from './member-on-projects-where.input';
import { Type } from 'class-transformer';
import { MemberOnProjectsOrderByWithRelationInput } from './member-on-projects-order-by-with-relation.input';
import { MemberOnProjectsWhereUniqueInput } from './member-on-projects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MemberOnProjectsCountAggregateInput } from './member-on-projects-count-aggregate.input';
import { MemberOnProjectsAvgAggregateInput } from './member-on-projects-avg-aggregate.input';
import { MemberOnProjectsSumAggregateInput } from './member-on-projects-sum-aggregate.input';
import { MemberOnProjectsMinAggregateInput } from './member-on-projects-min-aggregate.input';
import { MemberOnProjectsMaxAggregateInput } from './member-on-projects-max-aggregate.input';

@ArgsType()
export class MemberOnProjectsAggregateArgs {

    @Field(() => MemberOnProjectsWhereInput, {nullable:true})
    @Type(() => MemberOnProjectsWhereInput)
    where?: MemberOnProjectsWhereInput;

    @Field(() => [MemberOnProjectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MemberOnProjectsOrderByWithRelationInput>;

    @Field(() => MemberOnProjectsWhereUniqueInput, {nullable:true})
    cursor?: MemberOnProjectsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MemberOnProjectsCountAggregateInput, {nullable:true})
    _count?: MemberOnProjectsCountAggregateInput;

    @Field(() => MemberOnProjectsAvgAggregateInput, {nullable:true})
    _avg?: MemberOnProjectsAvgAggregateInput;

    @Field(() => MemberOnProjectsSumAggregateInput, {nullable:true})
    _sum?: MemberOnProjectsSumAggregateInput;

    @Field(() => MemberOnProjectsMinAggregateInput, {nullable:true})
    _min?: MemberOnProjectsMinAggregateInput;

    @Field(() => MemberOnProjectsMaxAggregateInput, {nullable:true})
    _max?: MemberOnProjectsMaxAggregateInput;
}
