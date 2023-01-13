import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class ActivityScalarWhereInput {

    @Field(() => [ActivityScalarWhereInput], {nullable:true})
    AND?: Array<ActivityScalarWhereInput>;

    @Field(() => [ActivityScalarWhereInput], {nullable:true})
    OR?: Array<ActivityScalarWhereInput>;

    @Field(() => [ActivityScalarWhereInput], {nullable:true})
    NOT?: Array<ActivityScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    config?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    workflowId?: IntFilter;
}
