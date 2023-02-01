import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class EventLogScalarWhereInput {

    @Field(() => [EventLogScalarWhereInput], {nullable:true})
    AND?: Array<EventLogScalarWhereInput>;

    @Field(() => [EventLogScalarWhereInput], {nullable:true})
    OR?: Array<EventLogScalarWhereInput>;

    @Field(() => [EventLogScalarWhereInput], {nullable:true})
    NOT?: Array<EventLogScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    taskId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    context?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    action?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    intent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    domain?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;
}
