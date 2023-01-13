import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateWithoutTaskInput } from './event-log-create-without-task.input';
import { Type } from 'class-transformer';
import { EventLogCreateOrConnectWithoutTaskInput } from './event-log-create-or-connect-without-task.input';
import { EventLogCreateManyTaskInputEnvelope } from './event-log-create-many-task-input-envelope.input';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';

@InputType()
export class EventLogCreateNestedManyWithoutTaskInput {

    @Field(() => [EventLogCreateWithoutTaskInput], {nullable:true})
    @Type(() => EventLogCreateWithoutTaskInput)
    create?: Array<EventLogCreateWithoutTaskInput>;

    @Field(() => [EventLogCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => EventLogCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<EventLogCreateOrConnectWithoutTaskInput>;

    @Field(() => EventLogCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => EventLogCreateManyTaskInputEnvelope)
    createMany?: EventLogCreateManyTaskInputEnvelope;

    @Field(() => [EventLogWhereUniqueInput], {nullable:true})
    @Type(() => EventLogWhereUniqueInput)
    connect?: Array<EventLogWhereUniqueInput>;
}
