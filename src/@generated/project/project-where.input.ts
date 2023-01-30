import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';
import { TaskDefinitionRelationFilter } from '../task-definition/task-definition-relation-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { MemberOnProjectsListRelationFilter } from '../member-on-projects/member-on-projects-list-relation-filter.input';
import { TaskBoardListRelationFilter } from '../task-board/task-board-list-relation-filter.input';
import { ProjectSettingsListRelationFilter } from '../project-settings/project-settings-list-relation-filter.input';

@InputType()
export class ProjectWhereInput {

    @Field(() => [ProjectWhereInput], {nullable:true})
    AND?: Array<ProjectWhereInput>;

    @Field(() => [ProjectWhereInput], {nullable:true})
    OR?: Array<ProjectWhereInput>;

    @Field(() => [ProjectWhereInput], {nullable:true})
    NOT?: Array<ProjectWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    icon?: StringFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => TaskDefinitionRelationFilter, {nullable:true})
    taskDefinition?: TaskDefinitionRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    taskDefinitionId?: IntFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    tasks?: TaskListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    creator?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    creatorId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    manager?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    managerId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    reporter?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    reporterId?: IntFilter;

    @Field(() => MemberOnProjectsListRelationFilter, {nullable:true})
    members?: MemberOnProjectsListRelationFilter;

    @Field(() => TaskBoardListRelationFilter, {nullable:true})
    taskBoards?: TaskBoardListRelationFilter;

    @Field(() => ProjectSettingsListRelationFilter, {nullable:true})
    settings?: ProjectSettingsListRelationFilter;
}
