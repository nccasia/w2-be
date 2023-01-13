import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { Type } from 'class-transformer';
import { EventLogCreateWithoutUserInput } from './event-log-create-without-user.input';

@InputType()
export class EventLogCreateOrConnectWithoutUserInput {

    @Field(() => EventLogWhereUniqueInput, {nullable:false})
    @Type(() => EventLogWhereUniqueInput)
    where!: EventLogWhereUniqueInput;

    @Field(() => EventLogCreateWithoutUserInput, {nullable:false})
    @Type(() => EventLogCreateWithoutUserInput)
    create!: EventLogCreateWithoutUserInput;
}
