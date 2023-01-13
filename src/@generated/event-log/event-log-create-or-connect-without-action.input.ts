import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { Type } from 'class-transformer';
import { EventLogCreateWithoutActionInput } from './event-log-create-without-action.input';

@InputType()
export class EventLogCreateOrConnectWithoutActionInput {

    @Field(() => EventLogWhereUniqueInput, {nullable:false})
    @Type(() => EventLogWhereUniqueInput)
    where!: EventLogWhereUniqueInput;

    @Field(() => EventLogCreateWithoutActionInput, {nullable:false})
    @Type(() => EventLogCreateWithoutActionInput)
    create!: EventLogCreateWithoutActionInput;
}
