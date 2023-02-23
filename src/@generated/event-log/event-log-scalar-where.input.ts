import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

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
}
