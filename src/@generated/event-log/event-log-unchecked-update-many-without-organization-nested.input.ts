import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateWithoutOrganizationInput } from './event-log-create-without-organization.input';
import { Type } from 'class-transformer';
import { EventLogCreateOrConnectWithoutOrganizationInput } from './event-log-create-or-connect-without-organization.input';
import { EventLogUpsertWithWhereUniqueWithoutOrganizationInput } from './event-log-upsert-with-where-unique-without-organization.input';
import { EventLogCreateManyOrganizationInputEnvelope } from './event-log-create-many-organization-input-envelope.input';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { EventLogUpdateWithWhereUniqueWithoutOrganizationInput } from './event-log-update-with-where-unique-without-organization.input';
import { EventLogUpdateManyWithWhereWithoutOrganizationInput } from './event-log-update-many-with-where-without-organization.input';
import { EventLogScalarWhereInput } from './event-log-scalar-where.input';

@InputType()
export class EventLogUncheckedUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [EventLogCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => EventLogCreateWithoutOrganizationInput)
    create?: Array<EventLogCreateWithoutOrganizationInput>;

    @Field(() => [EventLogCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => EventLogCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<EventLogCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [EventLogUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => EventLogUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<EventLogUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => EventLogCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => EventLogCreateManyOrganizationInputEnvelope)
    createMany?: EventLogCreateManyOrganizationInputEnvelope;

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

    @Field(() => [EventLogUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => EventLogUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<EventLogUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [EventLogUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => EventLogUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<EventLogUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [EventLogScalarWhereInput], {nullable:true})
    @Type(() => EventLogScalarWhereInput)
    deleteMany?: Array<EventLogScalarWhereInput>;
}
