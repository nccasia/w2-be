import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateWithoutTaskInput } from './event-log-create-without-task.input';
import { Type } from 'class-transformer';
import { EventLogCreateOrConnectWithoutTaskInput } from './event-log-create-or-connect-without-task.input';
import { EventLogUpsertWithWhereUniqueWithoutTaskInput } from './event-log-upsert-with-where-unique-without-task.input';
import { EventLogCreateManyTaskInputEnvelope } from './event-log-create-many-task-input-envelope.input';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { EventLogUpdateWithWhereUniqueWithoutTaskInput } from './event-log-update-with-where-unique-without-task.input';
import { EventLogUpdateManyWithWhereWithoutTaskInput } from './event-log-update-many-with-where-without-task.input';
import { EventLogScalarWhereInput } from './event-log-scalar-where.input';

@InputType()
export class EventLogUncheckedUpdateManyWithoutTaskNestedInput {

    @Field(() => [EventLogCreateWithoutTaskInput], {nullable:true})
    @Type(() => EventLogCreateWithoutTaskInput)
    create?: Array<EventLogCreateWithoutTaskInput>;

    @Field(() => [EventLogCreateOrConnectWithoutTaskInput], {nullable:true})
    @Type(() => EventLogCreateOrConnectWithoutTaskInput)
    connectOrCreate?: Array<EventLogCreateOrConnectWithoutTaskInput>;

    @Field(() => [EventLogUpsertWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => EventLogUpsertWithWhereUniqueWithoutTaskInput)
    upsert?: Array<EventLogUpsertWithWhereUniqueWithoutTaskInput>;

    @Field(() => EventLogCreateManyTaskInputEnvelope, {nullable:true})
    @Type(() => EventLogCreateManyTaskInputEnvelope)
    createMany?: EventLogCreateManyTaskInputEnvelope;

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

    @Field(() => [EventLogUpdateWithWhereUniqueWithoutTaskInput], {nullable:true})
    @Type(() => EventLogUpdateWithWhereUniqueWithoutTaskInput)
    update?: Array<EventLogUpdateWithWhereUniqueWithoutTaskInput>;

    @Field(() => [EventLogUpdateManyWithWhereWithoutTaskInput], {nullable:true})
    @Type(() => EventLogUpdateManyWithWhereWithoutTaskInput)
    updateMany?: Array<EventLogUpdateManyWithWhereWithoutTaskInput>;

    @Field(() => [EventLogScalarWhereInput], {nullable:true})
    @Type(() => EventLogScalarWhereInput)
    deleteMany?: Array<EventLogScalarWhereInput>;
}
