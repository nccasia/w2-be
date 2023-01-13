import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TaskAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    definitionId?: number;

    @Field(() => Float, {nullable:true})
    assigneeId?: number;

    @Field(() => Float, {nullable:true})
    creatorId?: number;

    @Field(() => Float, {nullable:true})
    parentId?: number;

    @Field(() => Float, {nullable:true})
    organizationId?: number;

    @Field(() => Float, {nullable:true})
    teamId?: number;
}
