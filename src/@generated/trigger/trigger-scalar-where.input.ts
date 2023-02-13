import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTriggerTypeFilter } from '../prisma/enum-trigger-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumTriggerStatusFilter } from '../prisma/enum-trigger-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class TriggerScalarWhereInput {

    @Field(() => [TriggerScalarWhereInput], {nullable:true})
    AND?: Array<TriggerScalarWhereInput>;

    @Field(() => [TriggerScalarWhereInput], {nullable:true})
    OR?: Array<TriggerScalarWhereInput>;

    @Field(() => [TriggerScalarWhereInput], {nullable:true})
    NOT?: Array<TriggerScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumTriggerTypeFilter, {nullable:true})
    type?: EnumTriggerTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => EnumTriggerStatusFilter, {nullable:true})
    status?: EnumTriggerStatusFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    taskId?: IntNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    value?: JsonNullableFilter;
}
