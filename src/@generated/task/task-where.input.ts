import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumTaskPriorityFilter } from '../prisma/enum-task-priority-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TaskDefinitionRelationFilter } from '../task-definition/task-definition-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { EventLogListRelationFilter } from '../event-log/event-log-list-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { TaskRelationFilter } from './task-relation-filter.input';
import { TaskListRelationFilter } from './task-list-relation-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';
import { TeamRelationFilter } from '../team/team-relation-filter.input';

@InputType()
export class TaskWhereInput {

    @Field(() => [TaskWhereInput], {nullable:true})
    AND?: Array<TaskWhereInput>;

    @Field(() => [TaskWhereInput], {nullable:true})
    OR?: Array<TaskWhereInput>;

    @Field(() => [TaskWhereInput], {nullable:true})
    NOT?: Array<TaskWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    dueDate?: DateTimeNullableFilter;

    @Field(() => EnumTaskPriorityFilter, {nullable:true})
    priority?: EnumTaskPriorityFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActve?: BoolFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    properties?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    values?: JsonNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    typeName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    cta?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ctaName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    state?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    stateName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    statusName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    stateValues?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    descriptionTemplate?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    titleTemplate?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    statusTemplate?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    stateTemplate?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notificationTemplate?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ctaTemplate?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    stateConfig?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    statusConfig?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    notificationConfig?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    processConfig?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    triggerConfig?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    ctaConfig?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    config?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    definitionId?: IntFilter;

    @Field(() => TaskDefinitionRelationFilter, {nullable:true})
    definition?: TaskDefinitionRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => EventLogListRelationFilter, {nullable:true})
    eventLogs?: EventLogListRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    assigneeId?: IntNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    assignee?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    creatorId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    creator?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    parentId?: IntNullableFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    parentTask?: TaskRelationFilter;

    @Field(() => TaskListRelationFilter, {nullable:true})
    subTasks?: TaskListRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    teamId?: IntFilter;

    @Field(() => TeamRelationFilter, {nullable:true})
    team?: TeamRelationFilter;
}
