import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';

@InputType()
export class TaskBoardSettingsScalarWhereWithAggregatesInput {

    @Field(() => [TaskBoardSettingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TaskBoardSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [TaskBoardSettingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TaskBoardSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [TaskBoardSettingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TaskBoardSettingsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    value?: JsonWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    taskBoardId?: IntWithAggregatesFilter;
}
