import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MemberOnProjectsScalarWhereWithAggregatesInput {

    @Field(() => [MemberOnProjectsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MemberOnProjectsScalarWhereWithAggregatesInput>;

    @Field(() => [MemberOnProjectsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MemberOnProjectsScalarWhereWithAggregatesInput>;

    @Field(() => [MemberOnProjectsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MemberOnProjectsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    assignedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    assignedBy?: StringWithAggregatesFilter;
}
