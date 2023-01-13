import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MemberOnTeamsAvgAggregate {

    @Field(() => Float, {nullable:true})
    teamId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;
}
