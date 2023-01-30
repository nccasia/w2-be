import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MemberOnProjectsAvgAggregate {

    @Field(() => Float, {nullable:true})
    projectId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;
}
