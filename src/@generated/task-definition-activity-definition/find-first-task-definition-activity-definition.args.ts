import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionWhereInput } from './task-definition-activity-definition-where.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionOrderByWithRelationInput } from './task-definition-activity-definition-order-by-with-relation.input';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionScalarFieldEnum } from './task-definition-activity-definition-scalar-field.enum';

@ArgsType()
export class FindFirstTaskDefinitionActivityDefinitionArgs {

    @Field(() => TaskDefinitionActivityDefinitionWhereInput, {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionWhereInput)
    where?: TaskDefinitionActivityDefinitionWhereInput;

    @Field(() => [TaskDefinitionActivityDefinitionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TaskDefinitionActivityDefinitionOrderByWithRelationInput>;

    @Field(() => TaskDefinitionActivityDefinitionWhereUniqueInput, {nullable:true})
    cursor?: TaskDefinitionActivityDefinitionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TaskDefinitionActivityDefinitionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TaskDefinitionActivityDefinitionScalarFieldEnum>;
}
