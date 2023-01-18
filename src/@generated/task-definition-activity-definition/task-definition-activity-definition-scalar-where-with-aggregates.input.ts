import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TaskDefinitionActivityDefinitionScalarWhereWithAggregatesInput {

    @Field(() => [TaskDefinitionActivityDefinitionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TaskDefinitionActivityDefinitionScalarWhereWithAggregatesInput>;

    @Field(() => [TaskDefinitionActivityDefinitionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TaskDefinitionActivityDefinitionScalarWhereWithAggregatesInput>;

    @Field(() => [TaskDefinitionActivityDefinitionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TaskDefinitionActivityDefinitionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    taskDefinitionId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    activityDefinitionId?: IntWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    config?: JsonNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    initialValue?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
