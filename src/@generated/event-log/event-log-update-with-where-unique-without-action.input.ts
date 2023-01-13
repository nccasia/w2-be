import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { Type } from 'class-transformer';
import { EventLogUpdateWithoutActionInput } from './event-log-update-without-action.input';

@InputType()
export class EventLogUpdateWithWhereUniqueWithoutActionInput {

    @Field(() => EventLogWhereUniqueInput, {nullable:false})
    @Type(() => EventLogWhereUniqueInput)
    where!: EventLogWhereUniqueInput;

    @Field(() => EventLogUpdateWithoutActionInput, {nullable:false})
    @Type(() => EventLogUpdateWithoutActionInput)
    data!: EventLogUpdateWithoutActionInput;
}
