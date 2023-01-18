import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { TaskDefinitionListRelationFilter } from '../task-definition/task-definition-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FormDefinetionWhereInput {

    @Field(() => [FormDefinetionWhereInput], {nullable:true})
    AND?: Array<FormDefinetionWhereInput>;

    @Field(() => [FormDefinetionWhereInput], {nullable:true})
    OR?: Array<FormDefinetionWhereInput>;

    @Field(() => [FormDefinetionWhereInput], {nullable:true})
    NOT?: Array<FormDefinetionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    schema?: JsonFilter;

    @Field(() => JsonFilter, {nullable:true})
    config?: JsonFilter;

    @Field(() => JsonFilter, {nullable:true})
    validationConfig?: JsonFilter;

    @Field(() => JsonFilter, {nullable:true})
    triggerConfig?: JsonFilter;

    @Field(() => JsonFilter, {nullable:true})
    serializerConfig?: JsonFilter;

    @Field(() => StringFilter, {nullable:true})
    displayTemplate?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    displayConfig?: JsonFilter;

    @Field(() => TaskDefinitionListRelationFilter, {nullable:true})
    taskDefinitions?: TaskDefinitionListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
