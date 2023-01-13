import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamRelationFilter } from '../team/team-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MemberOnTeamsWhereInput {

    @Field(() => [MemberOnTeamsWhereInput], {nullable:true})
    AND?: Array<MemberOnTeamsWhereInput>;

    @Field(() => [MemberOnTeamsWhereInput], {nullable:true})
    OR?: Array<MemberOnTeamsWhereInput>;

    @Field(() => [MemberOnTeamsWhereInput], {nullable:true})
    NOT?: Array<MemberOnTeamsWhereInput>;

    @Field(() => TeamRelationFilter, {nullable:true})
    team?: TeamRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    teamId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    assignedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    assignedBy?: StringFilter;
}
