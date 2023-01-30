import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumTaskBoardTypeFilter } from '../prisma/enum-task-board-type-filter.input';
import { EnumTaskBoardViewTypeFilter } from '../prisma/enum-task-board-view-type-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { EnumVisibilityFilter } from '../prisma/enum-visibility-filter.input';
import { TaskBoardSettingsListRelationFilter } from '../task-board-settings/task-board-settings-list-relation-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { TaskDefinitionRelationFilter } from '../task-definition/task-definition-relation-filter.input';

@InputType()
export class TaskBoardWhereInput {

    @Field(() => [TaskBoardWhereInput], {nullable:true})
    AND?: Array<TaskBoardWhereInput>;

    @Field(() => [TaskBoardWhereInput], {nullable:true})
    OR?: Array<TaskBoardWhereInput>;

    @Field(() => [TaskBoardWhereInput], {nullable:true})
    NOT?: Array<TaskBoardWhereInput>;

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

    @Field(() => EnumTaskBoardTypeFilter, {nullable:true})
    type?: EnumTaskBoardTypeFilter;

    @Field(() => EnumTaskBoardViewTypeFilter, {nullable:true})
    viewType?: EnumTaskBoardViewTypeFilter;

    @Field(() => JsonFilter, {nullable:true})
    viewConfig?: JsonFilter;

    @Field(() => EnumVisibilityFilter, {nullable:true})
    visibility?: EnumVisibilityFilter;

    @Field(() => TaskBoardSettingsListRelationFilter, {nullable:true})
    settings?: TaskBoardSettingsListRelationFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    projectId?: IntNullableFilter;

    @Field(() => TaskDefinitionRelationFilter, {nullable:true})
    taskDefinition?: TaskDefinitionRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    taskDefinitionId?: IntFilter;
}
