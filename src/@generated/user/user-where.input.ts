import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { EnumProviderEnumFilter } from '../prisma/enum-provider-enum-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { EventLogListRelationFilter } from '../event-log/event-log-list-relation-filter.input';
import { MemberOnProjectsListRelationFilter } from '../member-on-projects/member-on-projects-list-relation-filter.input';
import { MemberOnTeamsListRelationFilter } from '../member-on-teams/member-on-teams-list-relation-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';
import { TeamListRelationFilter } from '../team/team-list-relation-filter.input';
import { FileRelationFilter } from '../file/file-relation-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';
import { UserPermissionListRelationFilter } from '../user-permission/user-permission-list-relation-filter.input';
import { UserSettingListRelationFilter } from '../user-setting/user-setting-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstname?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastname?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    organizationId?: IntNullableFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    avatarId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    googleId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    googleToken?: StringNullableFilter;

    @Field(() => EnumProviderEnumFilter, {nullable:true})
    provider?: EnumProviderEnumFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fullName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    branchCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    jobPositionCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userTypeName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    statusName?: StringNullableFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => EventLogListRelationFilter, {nullable:true})
    taskEvents?: EventLogListRelationFilter;

    @Field(() => MemberOnProjectsListRelationFilter, {nullable:true})
    memberOnProjects?: MemberOnProjectsListRelationFilter;

    @Field(() => MemberOnTeamsListRelationFilter, {nullable:true})
    memberOnTeams?: MemberOnTeamsListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    createdProjects?: ProjectListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    managedProjects?: ProjectListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    repotedProjects?: ProjectListRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    assignedTasks?: TaskListRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    createdTasks?: TaskListRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    reportedTasks?: TaskListRelationFilter;

    @Field(() => TeamListRelationFilter, {nullable:true})
    createdteams?: TeamListRelationFilter;

    @Field(() => TeamListRelationFilter, {nullable:true})
    managedteams?: TeamListRelationFilter;

    @Field(() => FileRelationFilter, {nullable:true})
    avatar?: FileRelationFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => UserPermissionListRelationFilter, {nullable:true})
    userPermissions?: UserPermissionListRelationFilter;

    @Field(() => UserSettingListRelationFilter, {nullable:true})
    userSettings?: UserSettingListRelationFilter;
}
