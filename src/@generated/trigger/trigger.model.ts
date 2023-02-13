import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TriggerType } from '../prisma/trigger-type.enum';
import { TriggerStatus } from '../prisma/trigger-status.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Task } from '../task/task.model';

@ObjectType()
export class Trigger {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => TriggerType, {nullable:false})
    type!: keyof typeof TriggerType;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => TriggerStatus, {nullable:false})
    status!: keyof typeof TriggerStatus;

    @Field(() => Int, {nullable:true})
    taskId!: number | null;

    @Field(() => GraphQLJSON, {nullable:true})
    value!: any | null;

    @Field(() => Task, {nullable:true})
    task?: Task | null;
}
