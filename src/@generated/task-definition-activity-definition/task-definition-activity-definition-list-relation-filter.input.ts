import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionWhereInput } from './task-definition-activity-definition-where.input';

@InputType()
export class TaskDefinitionActivityDefinitionListRelationFilter {

    @Field(() => TaskDefinitionActivityDefinitionWhereInput, {nullable:true})
    every?: TaskDefinitionActivityDefinitionWhereInput;

    @Field(() => TaskDefinitionActivityDefinitionWhereInput, {nullable:true})
    some?: TaskDefinitionActivityDefinitionWhereInput;

    @Field(() => TaskDefinitionActivityDefinitionWhereInput, {nullable:true})
    none?: TaskDefinitionActivityDefinitionWhereInput;
}
