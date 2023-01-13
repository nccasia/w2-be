import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ActionType } from '../prisma/action-type.enum';
import { EventLog } from '../event-log/event-log.model';
import { ActionCount } from './action-count.output';

@ObjectType()
export class Action {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => ActionType, {nullable:false})
    type!: keyof typeof ActionType;

    @Field(() => [EventLog], {nullable:true})
    events?: Array<EventLog>;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:false})
    intent!: string;

    @Field(() => String, {nullable:false})
    domain!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => ActionCount, {nullable:false})
    _count?: ActionCount;
}
