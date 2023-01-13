import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionWhereInput } from './task-definition-where.input';
import { Type } from 'class-transformer';
import { TaskDefinitionOrderByWithRelationInput } from './task-definition-order-by-with-relation.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TaskDefinitionCountAggregateInput } from './task-definition-count-aggregate.input';
import { TaskDefinitionAvgAggregateInput } from './task-definition-avg-aggregate.input';
import { TaskDefinitionSumAggregateInput } from './task-definition-sum-aggregate.input';
import { TaskDefinitionMinAggregateInput } from './task-definition-min-aggregate.input';
import { TaskDefinitionMaxAggregateInput } from './task-definition-max-aggregate.input';

@ArgsType()
export class TaskDefinitionAggregateArgs {

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

    @Field(() => TaskDefinitionCountAggregateInput, {nullable:true})
    _count?: TaskDefinitionCountAggregateInput;

    @Field(() => TaskDefinitionAvgAggregateInput, {nullable:true})
    _avg?: TaskDefinitionAvgAggregateInput;

    @Field(() => TaskDefinitionSumAggregateInput, {nullable:true})
    _sum?: TaskDefinitionSumAggregateInput;

    @Field(() => TaskDefinitionMinAggregateInput, {nullable:true})
    _min?: TaskDefinitionMinAggregateInput;

    @Field(() => TaskDefinitionMaxAggregateInput, {nullable:true})
    _max?: TaskDefinitionMaxAggregateInput;
}
