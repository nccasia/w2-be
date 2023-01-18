import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionWhereInput } from './task-definition-activity-definition-where.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionOrderByWithRelationInput } from './task-definition-activity-definition-order-by-with-relation.input';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionCountAggregateInput } from './task-definition-activity-definition-count-aggregate.input';
import { TaskDefinitionActivityDefinitionAvgAggregateInput } from './task-definition-activity-definition-avg-aggregate.input';
import { TaskDefinitionActivityDefinitionSumAggregateInput } from './task-definition-activity-definition-sum-aggregate.input';
import { TaskDefinitionActivityDefinitionMinAggregateInput } from './task-definition-activity-definition-min-aggregate.input';
import { TaskDefinitionActivityDefinitionMaxAggregateInput } from './task-definition-activity-definition-max-aggregate.input';

@ArgsType()
export class TaskDefinitionActivityDefinitionAggregateArgs {

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

    @Field(() => TaskDefinitionActivityDefinitionCountAggregateInput, {nullable:true})
    _count?: TaskDefinitionActivityDefinitionCountAggregateInput;

    @Field(() => TaskDefinitionActivityDefinitionAvgAggregateInput, {nullable:true})
    _avg?: TaskDefinitionActivityDefinitionAvgAggregateInput;

    @Field(() => TaskDefinitionActivityDefinitionSumAggregateInput, {nullable:true})
    _sum?: TaskDefinitionActivityDefinitionSumAggregateInput;

    @Field(() => TaskDefinitionActivityDefinitionMinAggregateInput, {nullable:true})
    _min?: TaskDefinitionActivityDefinitionMinAggregateInput;

    @Field(() => TaskDefinitionActivityDefinitionMaxAggregateInput, {nullable:true})
    _max?: TaskDefinitionActivityDefinitionMaxAggregateInput;
}
