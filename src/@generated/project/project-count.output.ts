import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectCount {

    @Field(() => Int, {nullable:false})
    tasks?: number;

    @Field(() => Int, {nullable:false})
    members?: number;

    @Field(() => Int, {nullable:false})
    taskBoards?: number;

    @Field(() => Int, {nullable:false})
    settings?: number;
}
