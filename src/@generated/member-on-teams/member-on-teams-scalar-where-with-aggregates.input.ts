import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MemberOnTeamsScalarWhereWithAggregatesInput {

    @Field(() => [MemberOnTeamsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MemberOnTeamsScalarWhereWithAggregatesInput>;

    @Field(() => [MemberOnTeamsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MemberOnTeamsScalarWhereWithAggregatesInput>;

    @Field(() => [MemberOnTeamsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MemberOnTeamsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    teamId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    assignedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    assignedBy?: StringWithAggregatesFilter;
}
