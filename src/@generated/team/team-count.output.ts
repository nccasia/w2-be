import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TeamCount {

    @Field(() => Int, {nullable:false})
    memberOnTeams?: number;

    @Field(() => Int, {nullable:false})
    tasks?: number;
}
