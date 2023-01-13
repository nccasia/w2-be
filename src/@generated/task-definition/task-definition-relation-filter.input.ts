import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereInput } from './task-definition-where.input';

@InputType()
export class TaskDefinitionRelationFilter {

    @Field(() => TaskDefinitionWhereInput, {nullable:true})
    is?: TaskDefinitionWhereInput;

    @Field(() => TaskDefinitionWhereInput, {nullable:true})
    isNot?: TaskDefinitionWhereInput;
}
