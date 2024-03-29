import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ActivityCount {

    @Field(() => Int, {nullable:false})
    taskDefinitions?: number;

    @Field(() => Int, {nullable:false})
    triggers?: number;
}
