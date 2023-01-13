import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActionType } from '../prisma/action-type.enum';

@ObjectType()
export class ActionMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ActionType, {nullable:true})
    type?: keyof typeof ActionType;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => String, {nullable:true})
    intent?: string;

    @Field(() => String, {nullable:true})
    domain?: string;

    @Field(() => String, {nullable:true})
    content?: string;
}
