import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumTaskBoardTypeWithAggregatesFilter } from '../prisma/enum-task-board-type-with-aggregates-filter.input';
import { EnumTaskBoardViewTypeWithAggregatesFilter } from '../prisma/enum-task-board-view-type-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { EnumVisibilityWithAggregatesFilter } from '../prisma/enum-visibility-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class TaskBoardScalarWhereWithAggregatesInput {

    @Field(() => [TaskBoardScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TaskBoardScalarWhereWithAggregatesInput>;

    @Field(() => [TaskBoardScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TaskBoardScalarWhereWithAggregatesInput>;

    @Field(() => [TaskBoardScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TaskBoardScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    icon?: StringWithAggregatesFilter;

    @Field(() => EnumTaskBoardTypeWithAggregatesFilter, {nullable:true})
    type?: EnumTaskBoardTypeWithAggregatesFilter;

    @Field(() => EnumTaskBoardViewTypeWithAggregatesFilter, {nullable:true})
    viewType?: EnumTaskBoardViewTypeWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    viewConfig?: JsonWithAggregatesFilter;

    @Field(() => EnumVisibilityWithAggregatesFilter, {nullable:true})
    visibility?: EnumVisibilityWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    organizationId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    projectId?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    taskDefinitionId?: IntWithAggregatesFilter;
}
