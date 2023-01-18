import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ActivityDefinitionCount {

    @Field(() => Int, {nullable:false})
    taskDefinitionActivityDefinitions?: number;
}
