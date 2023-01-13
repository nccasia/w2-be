import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumActionTypeWithAggregatesFilter } from '../prisma/enum-action-type-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ActionScalarWhereWithAggregatesInput {

    @Field(() => [ActionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ActionScalarWhereWithAggregatesInput>;

    @Field(() => [ActionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ActionScalarWhereWithAggregatesInput>;

    @Field(() => [ActionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ActionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumActionTypeWithAggregatesFilter, {nullable:true})
    type?: EnumActionTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    action?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    intent?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    domain?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;
}
