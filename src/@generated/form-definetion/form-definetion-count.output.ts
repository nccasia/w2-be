import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FormDefinetionCount {

    @Field(() => Int, {nullable:false})
    taskDefinitions?: number;
}
