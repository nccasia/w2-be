import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { WorkflowRelationFilter } from '../workflow/workflow-relation-filter.input';
import { TaskDefinitionListRelationFilter } from '../task-definition/task-definition-list-relation-filter.input';
import { TriggerListRelationFilter } from '../trigger/trigger-list-relation-filter.input';

@InputType()
export class ActivityWhereInput {

    @Field(() => [ActivityWhereInput], {nullable:true})
    AND?: Array<ActivityWhereInput>;

    @Field(() => [ActivityWhereInput], {nullable:true})
    OR?: Array<ActivityWhereInput>;

    @Field(() => [ActivityWhereInput], {nullable:true})
    NOT?: Array<ActivityWhereInput>;

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

    @Field(() => JsonFilter, {nullable:true})
    config?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    workflowId?: IntFilter;

    @Field(() => WorkflowRelationFilter, {nullable:true})
    workflow?: WorkflowRelationFilter;

    @Field(() => TaskDefinitionListRelationFilter, {nullable:true})
    taskDefinitions?: TaskDefinitionListRelationFilter;

    @Field(() => TriggerListRelationFilter, {nullable:true})
    triggers?: TriggerListRelationFilter;
}
