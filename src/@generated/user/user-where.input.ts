import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FileRelationFilter } from '../file/file-relation-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';
import { TeamListRelationFilter } from '../team/team-list-relation-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';
import { MemberOnTeamsListRelationFilter } from '../member-on-teams/member-on-teams-list-relation-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { EventLogListRelationFilter } from '../event-log/event-log-list-relation-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { UserPermissionListRelationFilter } from '../user-permission/user-permission-list-relation-filter.input';

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

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstname?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastname?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    avatarId?: IntNullableFilter;

    @Field(() => FileRelationFilter, {nullable:true})
    avatar?: FileRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => TeamListRelationFilter, {nullable:true})
    managedteams?: TeamListRelationFilter;

    @Field(() => TeamListRelationFilter, {nullable:true})
    createdteams?: TeamListRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    createdTasks?: TaskListRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    assignedTasks?: TaskListRelationFilter;

    @Field(() => MemberOnTeamsListRelationFilter, {nullable:true})
    memberOnTeams?: MemberOnTeamsListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => EventLogListRelationFilter, {nullable:true})
    taskEvents?: EventLogListRelationFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => UserPermissionListRelationFilter, {nullable:true})
    userPermissions?: UserPermissionListRelationFilter;
}
