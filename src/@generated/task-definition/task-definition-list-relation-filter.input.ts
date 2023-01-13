import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereInput } from './task-definition-where.input';

@InputType()
export class TaskDefinitionListRelationFilter {

    @Field(() => TaskDefinitionWhereInput, {nullable:true})
    every?: TaskDefinitionWhereInput;

    @Field(() => TaskDefinitionWhereInput, {nullable:true})
    some?: TaskDefinitionWhereInput;

    @Field(() => TaskDefinitionWhereInput, {nullable:true})
    none?: TaskDefinitionWhereInput;
}
