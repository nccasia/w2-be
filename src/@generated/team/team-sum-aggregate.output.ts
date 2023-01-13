import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TeamSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    creatorId?: number;

    @Field(() => Int, {nullable:true})
    managerId?: number;

    @Field(() => Int, {nullable:true})
    organizationId?: number;
}
