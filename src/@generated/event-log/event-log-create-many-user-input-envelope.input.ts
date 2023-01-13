import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateManyUserInput } from './event-log-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class EventLogCreateManyUserInputEnvelope {

    @Field(() => [EventLogCreateManyUserInput], {nullable:false})
    @Type(() => EventLogCreateManyUserInput)
    data!: Array<EventLogCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
