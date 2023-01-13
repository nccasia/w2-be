import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateWithoutActionInput } from './event-log-create-without-action.input';
import { Type } from 'class-transformer';
import { EventLogCreateOrConnectWithoutActionInput } from './event-log-create-or-connect-without-action.input';
import { EventLogUpsertWithWhereUniqueWithoutActionInput } from './event-log-upsert-with-where-unique-without-action.input';
import { EventLogCreateManyActionInputEnvelope } from './event-log-create-many-action-input-envelope.input';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { EventLogUpdateWithWhereUniqueWithoutActionInput } from './event-log-update-with-where-unique-without-action.input';
import { EventLogUpdateManyWithWhereWithoutActionInput } from './event-log-update-many-with-where-without-action.input';
import { EventLogScalarWhereInput } from './event-log-scalar-where.input';

@InputType()
export class EventLogUpdateManyWithoutActionNestedInput {

    @Field(() => [EventLogCreateWithoutActionInput], {nullable:true})
    @Type(() => EventLogCreateWithoutActionInput)
    create?: Array<EventLogCreateWithoutActionInput>;

    @Field(() => [EventLogCreateOrConnectWithoutActionInput], {nullable:true})
    @Type(() => EventLogCreateOrConnectWithoutActionInput)
    connectOrCreate?: Array<EventLogCreateOrConnectWithoutActionInput>;

    @Field(() => [EventLogUpsertWithWhereUniqueWithoutActionInput], {nullable:true})
    @Type(() => EventLogUpsertWithWhereUniqueWithoutActionInput)
    upsert?: Array<EventLogUpsertWithWhereUniqueWithoutActionInput>;

    @Field(() => EventLogCreateManyActionInputEnvelope, {nullable:true})
    @Type(() => EventLogCreateManyActionInputEnvelope)
    createMany?: EventLogCreateManyActionInputEnvelope;

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

    @Field(() => [EventLogUpdateWithWhereUniqueWithoutActionInput], {nullable:true})
    @Type(() => EventLogUpdateWithWhereUniqueWithoutActionInput)
    update?: Array<EventLogUpdateWithWhereUniqueWithoutActionInput>;

    @Field(() => [EventLogUpdateManyWithWhereWithoutActionInput], {nullable:true})
    @Type(() => EventLogUpdateManyWithWhereWithoutActionInput)
    updateMany?: Array<EventLogUpdateManyWithWhereWithoutActionInput>;

    @Field(() => [EventLogScalarWhereInput], {nullable:true})
    @Type(() => EventLogScalarWhereInput)
    deleteMany?: Array<EventLogScalarWhereInput>;
}
