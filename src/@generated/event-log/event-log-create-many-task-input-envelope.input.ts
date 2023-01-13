import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateManyTaskInput } from './event-log-create-many-task.input';
import { Type } from 'class-transformer';

@InputType()
export class EventLogCreateManyTaskInputEnvelope {

    @Field(() => [EventLogCreateManyTaskInput], {nullable:false})
    @Type(() => EventLogCreateManyTaskInput)
    data!: Array<EventLogCreateManyTaskInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
