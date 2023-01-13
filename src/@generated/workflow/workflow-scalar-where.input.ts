import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class WorkflowScalarWhereInput {

    @Field(() => [WorkflowScalarWhereInput], {nullable:true})
    AND?: Array<WorkflowScalarWhereInput>;

    @Field(() => [WorkflowScalarWhereInput], {nullable:true})
    OR?: Array<WorkflowScalarWhereInput>;

    @Field(() => [WorkflowScalarWhereInput], {nullable:true})
    NOT?: Array<WorkflowScalarWhereInput>;

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
    organizationId?: IntFilter;
}
