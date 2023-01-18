import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { TaskDefinitionRelationFilter } from '../task-definition/task-definition-relation-filter.input';
import { ActivityDefinitionRelationFilter } from '../activity-definition/activity-definition-relation-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TaskDefinitionActivityDefinitionWhereInput {

    @Field(() => [TaskDefinitionActivityDefinitionWhereInput], {nullable:true})
    AND?: Array<TaskDefinitionActivityDefinitionWhereInput>;

    @Field(() => [TaskDefinitionActivityDefinitionWhereInput], {nullable:true})
    OR?: Array<TaskDefinitionActivityDefinitionWhereInput>;

    @Field(() => [TaskDefinitionActivityDefinitionWhereInput], {nullable:true})
    NOT?: Array<TaskDefinitionActivityDefinitionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    taskDefinitionId?: IntFilter;

    @Field(() => TaskDefinitionRelationFilter, {nullable:true})
    taskDefinition?: TaskDefinitionRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    activityDefinitionId?: IntFilter;

    @Field(() => ActivityDefinitionRelationFilter, {nullable:true})
    activityDefinition?: ActivityDefinitionRelationFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    config?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    initialValue?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
