import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumTaskPriorityWithAggregatesFilter } from '../prisma/enum-task-priority-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class TaskScalarWhereWithAggregatesInput {

    @Field(() => [TaskScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TaskScalarWhereWithAggregatesInput>;

    @Field(() => [TaskScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TaskScalarWhereWithAggregatesInput>;

    @Field(() => [TaskScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TaskScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    dueDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => EnumTaskPriorityWithAggregatesFilter, {nullable:true})
    priority?: EnumTaskPriorityWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    values?: JsonNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ctaName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    stateName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    statusName?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    definitionId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    assigneeId?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    creatorId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    parentId?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    organizationId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    teamId?: IntNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    config?: JsonNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cta?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ctaTemplate?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    descriptionTemplate?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notificationTemplate?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    properties?: JsonNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    state?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    stateTemplate?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    stateValues?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    statusTemplate?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    titleTemplate?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    type?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    typeName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    formConfig?: JsonNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    formId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    projectId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    reporterId?: IntNullableWithAggregatesFilter;
}
