import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumTaskPriorityFilter } from '../prisma/enum-task-priority-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class TaskScalarWhereInput {

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    AND?: Array<TaskScalarWhereInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    OR?: Array<TaskScalarWhereInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    NOT?: Array<TaskScalarWhereInput>;

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

    @Field(() => JsonNullableFilter, {nullable:true})
    values?: JsonNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    ctaName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    stateName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    statusName?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    definitionId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    assigneeId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    creatorId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    parentId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    teamId?: IntNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    config?: JsonNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    cta?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ctaTemplate?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    descriptionTemplate?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notificationTemplate?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    properties?: JsonNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    state?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    stateTemplate?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    stateValues?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    statusTemplate?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    titleTemplate?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    typeName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    formConfig?: JsonNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    formId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    projectId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    reporterId?: IntNullableFilter;
}
