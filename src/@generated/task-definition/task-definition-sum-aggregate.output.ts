import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskDefinitionSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    formId?: number;

    @Field(() => Int, {nullable:true})
    organizationId?: number;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => Int, {nullable:true})
    workflowId?: number;

    @Field(() => Int, {nullable:true})
    actvityId?: number;
}