import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';
import { TaskRelationFilter } from '../task/task-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class EventLogWhereInput {

    @Field(() => [EventLogWhereInput], {nullable:true})
    AND?: Array<EventLogWhereInput>;

    @Field(() => [EventLogWhereInput], {nullable:true})
    OR?: Array<EventLogWhereInput>;

    @Field(() => [EventLogWhereInput], {nullable:true})
    NOT?: Array<EventLogWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    taskId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    organizationId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    context?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    action?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    domain?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    intent?: StringNullableFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    task?: TaskRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
