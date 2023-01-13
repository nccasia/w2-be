import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { Type } from 'class-transformer';
import { EventLogUpdateWithoutTaskInput } from './event-log-update-without-task.input';

@InputType()
export class EventLogUpdateWithWhereUniqueWithoutTaskInput {

    @Field(() => EventLogWhereUniqueInput, {nullable:false})
    @Type(() => EventLogWhereUniqueInput)
    where!: EventLogWhereUniqueInput;

    @Field(() => EventLogUpdateWithoutTaskInput, {nullable:false})
    @Type(() => EventLogUpdateWithoutTaskInput)
    data!: EventLogUpdateWithoutTaskInput;
}
