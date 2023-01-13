import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { Type } from 'class-transformer';
import { EventLogUpdateWithoutTaskInput } from './event-log-update-without-task.input';
import { EventLogCreateWithoutTaskInput } from './event-log-create-without-task.input';

@InputType()
export class EventLogUpsertWithWhereUniqueWithoutTaskInput {

    @Field(() => EventLogWhereUniqueInput, {nullable:false})
    @Type(() => EventLogWhereUniqueInput)
    where!: EventLogWhereUniqueInput;

    @Field(() => EventLogUpdateWithoutTaskInput, {nullable:false})
    @Type(() => EventLogUpdateWithoutTaskInput)
    update!: EventLogUpdateWithoutTaskInput;

    @Field(() => EventLogCreateWithoutTaskInput, {nullable:false})
    @Type(() => EventLogCreateWithoutTaskInput)
    create!: EventLogCreateWithoutTaskInput;
}
