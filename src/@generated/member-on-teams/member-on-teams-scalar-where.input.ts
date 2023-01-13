import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MemberOnTeamsScalarWhereInput {

    @Field(() => [MemberOnTeamsScalarWhereInput], {nullable:true})
    AND?: Array<MemberOnTeamsScalarWhereInput>;

    @Field(() => [MemberOnTeamsScalarWhereInput], {nullable:true})
    OR?: Array<MemberOnTeamsScalarWhereInput>;

    @Field(() => [MemberOnTeamsScalarWhereInput], {nullable:true})
    NOT?: Array<MemberOnTeamsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    teamId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;
}
