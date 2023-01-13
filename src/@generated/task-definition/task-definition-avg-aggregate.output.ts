import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TaskDefinitionAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    formId?: number;

    @Field(() => Float, {nullable:true})
    organizationId?: number;

    @Field(() => Float, {nullable:true})
    parentId?: number;

    @Field(() => Float, {nullable:true})
    workflowId?: number;

    @Field(() => Float, {nullable:true})
    actvityId?: number;
}