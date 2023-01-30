import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FormCount {

    @Field(() => Int, {nullable:false})
    taskDefinitions?: number;

    @Field(() => Int, {nullable:false})
    tasks?: number;
}
