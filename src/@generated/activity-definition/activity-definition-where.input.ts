import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumActivityTypeFilter } from '../prisma/enum-activity-type-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ActivityDefinitionWhereInput {

    @Field(() => [ActivityDefinitionWhereInput], {nullable:true})
    AND?: Array<ActivityDefinitionWhereInput>;

    @Field(() => [ActivityDefinitionWhereInput], {nullable:true})
    OR?: Array<ActivityDefinitionWhereInput>;

    @Field(() => [ActivityDefinitionWhereInput], {nullable:true})
    NOT?: Array<ActivityDefinitionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    synchronous?: BoolFilter;

    @Field(() => EnumActivityTypeFilter, {nullable:true})
    type?: EnumActivityTypeFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    config?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    initialValue?: JsonNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;
}
