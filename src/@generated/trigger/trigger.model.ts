import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TriggerType } from '../prisma/trigger-type.enum';
import { Int } from '@nestjs/graphql';
import { Activity } from '../activity/activity.model';

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

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    activityId!: number;

    @Field(() => Activity, {nullable:false})
    activity?: Activity;
}
