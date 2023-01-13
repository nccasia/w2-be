import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTriggerTypeFilter } from '../prisma/enum-trigger-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

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

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    activityId?: IntFilter;
}
