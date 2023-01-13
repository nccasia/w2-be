import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumActionTypeFilter } from '../prisma/enum-action-type-filter.input';
import { EventLogListRelationFilter } from '../event-log/event-log-list-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ActionWhereInput {

    @Field(() => [ActionWhereInput], {nullable:true})
    AND?: Array<ActionWhereInput>;

    @Field(() => [ActionWhereInput], {nullable:true})
    OR?: Array<ActionWhereInput>;

    @Field(() => [ActionWhereInput], {nullable:true})
    NOT?: Array<ActionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => EnumActionTypeFilter, {nullable:true})
    type?: EnumActionTypeFilter;

    @Field(() => EventLogListRelationFilter, {nullable:true})
    events?: EventLogListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    action?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    intent?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    domain?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;
}
