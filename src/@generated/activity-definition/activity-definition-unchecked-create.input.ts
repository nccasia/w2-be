import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActivityType } from '../prisma/activity-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ActivityDefinitionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    synchronous?: boolean;

    @Field(() => ActivityType, {nullable:false})
    type!: keyof typeof ActivityType;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    initialValue?: any;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;
}
