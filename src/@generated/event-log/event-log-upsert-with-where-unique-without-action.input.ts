import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { Type } from 'class-transformer';
import { EventLogUpdateWithoutActionInput } from './event-log-update-without-action.input';
import { EventLogCreateWithoutActionInput } from './event-log-create-without-action.input';

@InputType()
export class EventLogUpsertWithWhereUniqueWithoutActionInput {

    @Field(() => EventLogWhereUniqueInput, {nullable:false})
    @Type(() => EventLogWhereUniqueInput)
    where!: EventLogWhereUniqueInput;

    @Field(() => EventLogUpdateWithoutActionInput, {nullable:false})
    @Type(() => EventLogUpdateWithoutActionInput)
    update!: EventLogUpdateWithoutActionInput;

    @Field(() => EventLogCreateWithoutActionInput, {nullable:false})
    @Type(() => EventLogCreateWithoutActionInput)
    create!: EventLogCreateWithoutActionInput;
}
