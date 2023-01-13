import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateWithoutUserInput } from './event-log-create-without-user.input';
import { Type } from 'class-transformer';
import { EventLogCreateOrConnectWithoutUserInput } from './event-log-create-or-connect-without-user.input';
import { EventLogUpsertWithWhereUniqueWithoutUserInput } from './event-log-upsert-with-where-unique-without-user.input';
import { EventLogCreateManyUserInputEnvelope } from './event-log-create-many-user-input-envelope.input';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { EventLogUpdateWithWhereUniqueWithoutUserInput } from './event-log-update-with-where-unique-without-user.input';
import { EventLogUpdateManyWithWhereWithoutUserInput } from './event-log-update-many-with-where-without-user.input';
import { EventLogScalarWhereInput } from './event-log-scalar-where.input';

@InputType()
export class EventLogUpdateManyWithoutUserNestedInput {

    @Field(() => [EventLogCreateWithoutUserInput], {nullable:true})
    @Type(() => EventLogCreateWithoutUserInput)
    create?: Array<EventLogCreateWithoutUserInput>;

    @Field(() => [EventLogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EventLogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EventLogCreateOrConnectWithoutUserInput>;

    @Field(() => [EventLogUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EventLogUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<EventLogUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EventLogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EventLogCreateManyUserInputEnvelope)
    createMany?: EventLogCreateManyUserInputEnvelope;

    @Field(() => [EventLogWhereUniqueInput], {nullable:true})
    @Type(() => EventLogWhereUniqueInput)
    set?: Array<EventLogWhereUniqueInput>;

    @Field(() => [EventLogWhereUniqueInput], {nullable:true})
    @Type(() => EventLogWhereUniqueInput)
    disconnect?: Array<EventLogWhereUniqueInput>;

    @Field(() => [EventLogWhereUniqueInput], {nullable:true})
    @Type(() => EventLogWhereUniqueInput)
    delete?: Array<EventLogWhereUniqueInput>;

    @Field(() => [EventLogWhereUniqueInput], {nullable:true})
    @Type(() => EventLogWhereUniqueInput)
    connect?: Array<EventLogWhereUniqueInput>;

    @Field(() => [EventLogUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EventLogUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<EventLogUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EventLogUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => EventLogUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<EventLogUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EventLogScalarWhereInput], {nullable:true})
    @Type(() => EventLogScalarWhereInput)
    deleteMany?: Array<EventLogScalarWhereInput>;
}
