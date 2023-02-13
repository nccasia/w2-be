import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerType } from '../prisma/trigger-type.enum';
import { TriggerStatus } from '../prisma/trigger-status.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class TriggerCreateWithoutTaskInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TriggerType, {nullable:false})
    type!: keyof typeof TriggerType;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => TriggerStatus, {nullable:false})
    status!: keyof typeof TriggerStatus;

    @Field(() => GraphQLJSON, {nullable:true})
    value?: any;
}
