import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EventLogAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    taskId?: number;

    @Field(() => Float, {nullable:true})
    actionId?: number;

    @Field(() => Float, {nullable:true})
    organizationId?: number;
}
