import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FormRelationFilter } from '../form/form-relation-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { TaskListRelationFilter } from '../task/task-list-relation-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';
import { TaskDefinitionRelationFilter } from './task-definition-relation-filter.input';
import { TaskDefinitionListRelationFilter } from './task-definition-list-relation-filter.input';
import { TaskDefinitionActivityDefinitionListRelationFilter } from '../task-definition-activity-definition/task-definition-activity-definition-list-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';
import { TaskBoardListRelationFilter } from '../task-board/task-board-list-relation-filter.input';

@InputType()
export class TaskDefinitionWhereInput {

    @Field(() => [TaskDefinitionWhereInput], {nullable:true})
    AND?: Array<TaskDefinitionWhereInput>;

    @Field(() => [TaskDefinitionWhereInput], {nullable:true})
    OR?: Array<TaskDefinitionWhereInput>;

    @Field(() => [TaskDefinitionWhereInput], {nullable:true})
    NOT?: Array<TaskDefinitionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    keyTemplate?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    icon?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    thumbnail?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    formId?: IntNullableFilter;

    @Field(() => FormRelationFilter, {nullable:true})
    form?: FormRelationFilter;

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
    machineConfig?: JsonNullableFilter;

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

    @Field(() => TaskListRelationFilter, {nullable:true})
    taskInstances?: TaskListRelationFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    parentId?: IntNullableFilter;

    @Field(() => TaskDefinitionRelationFilter, {nullable:true})
    parentTaskDefinition?: TaskDefinitionRelationFilter;

    @Field(() => TaskDefinitionListRelationFilter, {nullable:true})
    subTaskDefinitions?: TaskDefinitionListRelationFilter;

    @Field(() => TaskDefinitionActivityDefinitionListRelationFilter, {nullable:true})
    taskDefinitionActivityDefinitions?: TaskDefinitionActivityDefinitionListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    projects?: ProjectListRelationFilter;

    @Field(() => TaskBoardListRelationFilter, {nullable:true})
    taskBoards?: TaskBoardListRelationFilter;
}
