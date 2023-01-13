import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MemberOnTeamsSumAggregate {

    @Field(() => Int, {nullable:true})
    teamId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
