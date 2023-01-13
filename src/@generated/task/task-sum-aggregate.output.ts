import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    definitionId?: number;

    @Field(() => Int, {nullable:true})
    assigneeId?: number;

    @Field(() => Int, {nullable:true})
    creatorId?: number;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => Int, {nullable:true})
    organizationId?: number;

    @Field(() => Int, {nullable:true})
    teamId?: number;
}
