import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ResourceCount {

    @Field(() => Int, {nullable:false})
    resourceItems?: number;
}
