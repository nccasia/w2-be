import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TaskBoardCount {

    @Field(() => Int, {nullable:false})
    settings?: number;
}
