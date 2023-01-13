import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';
import { ActivityListRelationFilter } from '../activity/activity-list-relation-filter.input';
import { TaskDefinitionListRelationFilter } from '../task-definition/task-definition-list-relation-filter.input';

@InputType()
export class WorkflowWhereInput {

    @Field(() => [WorkflowWhereInput], {nullable:true})
    AND?: Array<WorkflowWhereInput>;

    @Field(() => [WorkflowWhereInput], {nullable:true})
    OR?: Array<WorkflowWhereInput>;

    @Field(() => [WorkflowWhereInput], {nullable:true})
    NOT?: Array<WorkflowWhereInput>;

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
    organizationId?: IntFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => ActivityListRelationFilter, {nullable:true})
    activities?: ActivityListRelationFilter;

    @Field(() => TaskDefinitionListRelationFilter, {nullable:true})
    taskDefinitions?: TaskDefinitionListRelationFilter;
}
