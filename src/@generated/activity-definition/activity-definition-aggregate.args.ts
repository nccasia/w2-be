import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDefinitionWhereInput } from './activity-definition-where.input';
import { Type } from 'class-transformer';
import { ActivityDefinitionOrderByWithRelationInput } from './activity-definition-order-by-with-relation.input';
import { ActivityDefinitionWhereUniqueInput } from './activity-definition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActivityDefinitionCountAggregateInput } from './activity-definition-count-aggregate.input';
import { ActivityDefinitionAvgAggregateInput } from './activity-definition-avg-aggregate.input';
import { ActivityDefinitionSumAggregateInput } from './activity-definition-sum-aggregate.input';
import { ActivityDefinitionMinAggregateInput } from './activity-definition-min-aggregate.input';
import { ActivityDefinitionMaxAggregateInput } from './activity-definition-max-aggregate.input';

@ArgsType()
export class ActivityDefinitionAggregateArgs {

    @Field(() => ActivityDefinitionWhereInput, {nullable:true})
    @Type(() => ActivityDefinitionWhereInput)
    where?: ActivityDefinitionWhereInput;

    @Field(() => [ActivityDefinitionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActivityDefinitionOrderByWithRelationInput>;

    @Field(() => ActivityDefinitionWhereUniqueInput, {nullable:true})
    cursor?: ActivityDefinitionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ActivityDefinitionCountAggregateInput, {nullable:true})
    _count?: ActivityDefinitionCountAggregateInput;

    @Field(() => ActivityDefinitionAvgAggregateInput, {nullable:true})
    _avg?: ActivityDefinitionAvgAggregateInput;

    @Field(() => ActivityDefinitionSumAggregateInput, {nullable:true})
    _sum?: ActivityDefinitionSumAggregateInput;

    @Field(() => ActivityDefinitionMinAggregateInput, {nullable:true})
    _min?: ActivityDefinitionMinAggregateInput;

    @Field(() => ActivityDefinitionMaxAggregateInput, {nullable:true})
    _max?: ActivityDefinitionMaxAggregateInput;
}
