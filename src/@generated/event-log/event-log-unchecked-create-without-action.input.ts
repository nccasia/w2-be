import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class EventLogUncheckedCreateWithoutActionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    taskId?: number;

    @Field(() => Int, {nullable:false})
    organizationId!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    context?: any;

    @Field(() => String, {nullable:true})
    content?: string;
}
