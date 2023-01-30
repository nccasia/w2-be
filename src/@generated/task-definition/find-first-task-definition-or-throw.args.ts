import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionWhereInput } from './task-definition-where.input';
import { Type } from 'class-transformer';
import { TaskDefinitionOrderByWithRelationInput } from './task-definition-order-by-with-relation.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TaskDefinitionScalarFieldEnum } from './task-definition-scalar-field.enum';

@ArgsType()
export class FindFirstTaskDefinitionOrThrowArgs {

    @Field(() => TaskDefinitionWhereInput, {nullable:true})
    @Type(() => TaskDefinitionWhereInput)
    where?: TaskDefinitionWhereInput;

    @Field(() => [TaskDefinitionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TaskDefinitionOrderByWithRelationInput>;

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:true})
    cursor?: TaskDefinitionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TaskDefinitionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TaskDefinitionScalarFieldEnum>;
}
