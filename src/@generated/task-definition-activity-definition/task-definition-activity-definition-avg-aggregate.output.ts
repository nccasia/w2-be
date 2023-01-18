import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TaskDefinitionActivityDefinitionAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    taskDefinitionId?: number;

    @Field(() => Float, {nullable:true})
    activityDefinitionId?: number;
}
