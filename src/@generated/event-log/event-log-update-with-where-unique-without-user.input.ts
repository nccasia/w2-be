import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { Type } from 'class-transformer';
import { EventLogUpdateWithoutUserInput } from './event-log-update-without-user.input';

@InputType()
export class EventLogUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EventLogWhereUniqueInput, {nullable:false})
    @Type(() => EventLogWhereUniqueInput)
    where!: EventLogWhereUniqueInput;

    @Field(() => EventLogUpdateWithoutUserInput, {nullable:false})
    @Type(() => EventLogUpdateWithoutUserInput)
    data!: EventLogUpdateWithoutUserInput;
}
