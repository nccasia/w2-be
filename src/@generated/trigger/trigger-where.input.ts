import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTriggerTypeFilter } from '../prisma/enum-trigger-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ActivityRelationFilter } from '../activity/activity-relation-filter.input';

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

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    activityId?: IntFilter;

    @Field(() => ActivityRelationFilter, {nullable:true})
    activity?: ActivityRelationFilter;
}
