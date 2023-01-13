import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateManyActionInput } from './event-log-create-many-action.input';
import { Type } from 'class-transformer';

@InputType()
export class EventLogCreateManyActionInputEnvelope {

    @Field(() => [EventLogCreateManyActionInput], {nullable:false})
    @Type(() => EventLogCreateManyActionInput)
    data!: Array<EventLogCreateManyActionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
