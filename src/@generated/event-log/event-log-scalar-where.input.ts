import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

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
    actionId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    organizationId?: IntFilter;
}
