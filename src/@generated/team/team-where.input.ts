import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MemberOnTeamsListRelationFilter } from '../member-on-teams/member-on-teams-list-relation-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';

@InputType()
export class TeamWhereInput {

    @Field(() => [TeamWhereInput], {nullable:true})
    AND?: Array<TeamWhereInput>;

    @Field(() => [TeamWhereInput], {nullable:true})
    OR?: Array<TeamWhereInput>;

    @Field(() => [TeamWhereInput], {nullable:true})
    NOT?: Array<TeamWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bio?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    creatorId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    managerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => MemberOnTeamsListRelationFilter, {nullable:true})
    memberOnTeams?: MemberOnTeamsListRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    tasks?: TaskListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    creator?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    manager?: UserRelationFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;
}
