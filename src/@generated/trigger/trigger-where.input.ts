import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTriggerTypeFilter } from '../prisma/enum-trigger-type-filter.input';
import { EnumTriggerStatusFilter } from '../prisma/enum-trigger-status-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { TaskRelationFilter } from '../task/task-relation-filter.input';

@InputType()
export class TriggerWhereInput {

    @Field(() => [TriggerWhereInput], {nullable:true})
    AND?: Array<TriggerWhereInput>;

    @Field(() => [TriggerWhereInput], {nullable:true})
    OR?: Array<TriggerWhereInput>;

    @Field(() => [TriggerWhereInput], {nullable:true})
    NOT?: Array<TriggerWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumTriggerTypeFilter, {nullable:true})
    type?: EnumTriggerTypeFilter;

    @Field(() => EnumTriggerStatusFilter, {nullable:true})
    status?: EnumTriggerStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    value?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    taskId?: IntNullableFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    task?: TaskRelationFilter;
}
