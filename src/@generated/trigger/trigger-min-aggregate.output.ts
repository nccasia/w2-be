import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TriggerType } from '../prisma/trigger-type.enum';
import { TriggerStatus } from '../prisma/trigger-status.enum';

@ObjectType()
export class TriggerMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TriggerType, {nullable:true})
    type?: keyof typeof TriggerType;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    key?: string;

    @Field(() => TriggerStatus, {nullable:true})
    status?: keyof typeof TriggerStatus;

    @Field(() => Int, {nullable:true})
    taskId?: number;
}
