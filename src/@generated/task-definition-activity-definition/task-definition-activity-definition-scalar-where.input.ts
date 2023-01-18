import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TaskDefinitionActivityDefinitionScalarWhereInput {

    @Field(() => [TaskDefinitionActivityDefinitionScalarWhereInput], {nullable:true})
    AND?: Array<TaskDefinitionActivityDefinitionScalarWhereInput>;

    @Field(() => [TaskDefinitionActivityDefinitionScalarWhereInput], {nullable:true})
    OR?: Array<TaskDefinitionActivityDefinitionScalarWhereInput>;

    @Field(() => [TaskDefinitionActivityDefinitionScalarWhereInput], {nullable:true})
    NOT?: Array<TaskDefinitionActivityDefinitionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    taskDefinitionId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    activityDefinitionId?: IntFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    config?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    initialValue?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
