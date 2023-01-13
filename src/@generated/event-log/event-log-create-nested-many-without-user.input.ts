import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateWithoutUserInput } from './event-log-create-without-user.input';
import { Type } from 'class-transformer';
import { EventLogCreateOrConnectWithoutUserInput } from './event-log-create-or-connect-without-user.input';
import { EventLogCreateManyUserInputEnvelope } from './event-log-create-many-user-input-envelope.input';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';

@InputType()
export class EventLogCreateNestedManyWithoutUserInput {

    @Field(() => [EventLogCreateWithoutUserInput], {nullable:true})
    @Type(() => EventLogCreateWithoutUserInput)
    create?: Array<EventLogCreateWithoutUserInput>;

    @Field(() => [EventLogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EventLogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EventLogCreateOrConnectWithoutUserInput>;

    @Field(() => EventLogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EventLogCreateManyUserInputEnvelope)
    createMany?: EventLogCreateManyUserInputEnvelope;

    @Field(() => [EventLogWhereUniqueInput], {nullable:true})
    @Type(() => EventLogWhereUniqueInput)
    connect?: Array<EventLogWhereUniqueInput>;
}
