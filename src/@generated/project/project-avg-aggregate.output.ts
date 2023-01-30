import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ProjectAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    organizationId?: number;

    @Field(() => Float, {nullable:true})
    taskDefinitionId?: number;

    @Field(() => Float, {nullable:true})
    creatorId?: number;

    @Field(() => Float, {nullable:true})
    managerId?: number;

    @Field(() => Float, {nullable:true})
    reporterId?: number;
}
