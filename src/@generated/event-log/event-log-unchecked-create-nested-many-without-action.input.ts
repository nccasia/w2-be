import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateWithoutActionInput } from './event-log-create-without-action.input';
import { Type } from 'class-transformer';
import { EventLogCreateOrConnectWithoutActionInput } from './event-log-create-or-connect-without-action.input';
import { EventLogCreateManyActionInputEnvelope } from './event-log-create-many-action-input-envelope.input';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';

@InputType()
export class EventLogUncheckedCreateNestedManyWithoutActionInput {

    @Field(() => [EventLogCreateWithoutActionInput], {nullable:true})
    @Type(() => EventLogCreateWithoutActionInput)
    create?: Array<EventLogCreateWithoutActionInput>;

    @Field(() => [EventLogCreateOrConnectWithoutActionInput], {nullable:true})
    @Type(() => EventLogCreateOrConnectWithoutActionInput)
    connectOrCreate?: Array<EventLogCreateOrConnectWithoutActionInput>;

    @Field(() => EventLogCreateManyActionInputEnvelope, {nullable:true})
    @Type(() => EventLogCreateManyActionInputEnvelope)
    createMany?: EventLogCreateManyActionInputEnvelope;

    @Field(() => [EventLogWhereUniqueInput], {nullable:true})
    @Type(() => EventLogWhereUniqueInput)
    connect?: Array<EventLogWhereUniqueInput>;
}
