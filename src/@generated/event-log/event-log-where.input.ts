import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { TaskRelationFilter } from '../task/task-relation-filter.input';
import { ActionRelationFilter } from '../action/action-relation-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';

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

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    taskId?: IntNullableFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    task?: TaskRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    actionId?: IntFilter;

    @Field(() => ActionRelationFilter, {nullable:true})
    Action?: ActionRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;
}