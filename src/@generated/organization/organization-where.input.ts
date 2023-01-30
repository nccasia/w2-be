import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { TeamListRelationFilter } from '../team/team-list-relation-filter.input';
import { SettingsListRelationFilter } from '../settings/settings-list-relation-filter.input';
import { FileListRelationFilter } from '../file/file-list-relation-filter.input';
import { EventLogListRelationFilter } from '../event-log/event-log-list-relation-filter.input';
import { TaskDefinitionListRelationFilter } from '../task-definition/task-definition-list-relation-filter.input';
import { PermissionGroupListRelationFilter } from '../permission-group/permission-group-list-relation-filter.input';
import { PermissionListRelationFilter } from '../permission/permission-list-relation-filter.input';
import { ResourceListRelationFilter } from '../resource/resource-list-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';
import { TaskBoardListRelationFilter } from '../task-board/task-board-list-relation-filter.input';

@InputType()
export class OrganizationWhereInput {

    @Field(() => [OrganizationWhereInput], {nullable:true})
    AND?: Array<OrganizationWhereInput>;

    @Field(() => [OrganizationWhereInput], {nullable:true})
    OR?: Array<OrganizationWhereInput>;

    @Field(() => [OrganizationWhereInput], {nullable:true})
    NOT?: Array<OrganizationWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    tasks?: TaskListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => TeamListRelationFilter, {nullable:true})
    teams?: TeamListRelationFilter;

    @Field(() => SettingsListRelationFilter, {nullable:true})
    settings?: SettingsListRelationFilter;

    @Field(() => FileListRelationFilter, {nullable:true})
    files?: FileListRelationFilter;

    @Field(() => EventLogListRelationFilter, {nullable:true})
    eventLogs?: EventLogListRelationFilter;

    @Field(() => TaskDefinitionListRelationFilter, {nullable:true})
    taskDefinitions?: TaskDefinitionListRelationFilter;

    @Field(() => PermissionGroupListRelationFilter, {nullable:true})
    permissionGroups?: PermissionGroupListRelationFilter;

    @Field(() => PermissionListRelationFilter, {nullable:true})
    permissions?: PermissionListRelationFilter;

    @Field(() => ResourceListRelationFilter, {nullable:true})
    resources?: ResourceListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    projects?: ProjectListRelationFilter;

    @Field(() => TaskBoardListRelationFilter, {nullable:true})
    taskBoards?: TaskBoardListRelationFilter;
}
