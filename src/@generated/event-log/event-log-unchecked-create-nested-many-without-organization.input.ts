import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateWithoutOrganizationInput } from './event-log-create-without-organization.input';
import { Type } from 'class-transformer';
import { EventLogCreateOrConnectWithoutOrganizationInput } from './event-log-create-or-connect-without-organization.input';
import { EventLogCreateManyOrganizationInputEnvelope } from './event-log-create-many-organization-input-envelope.input';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';

@InputType()
export class EventLogUncheckedCreateNestedManyWithoutOrganizationInput {

    @Field(() => [EventLogCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => EventLogCreateWithoutOrganizationInput)
    create?: Array<EventLogCreateWithoutOrganizationInput>;

    @Field(() => [EventLogCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => EventLogCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<EventLogCreateOrConnectWithoutOrganizationInput>;

    @Field(() => EventLogCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => EventLogCreateManyOrganizationInputEnvelope)
    createMany?: EventLogCreateManyOrganizationInputEnvelope;

    @Field(() => [EventLogWhereUniqueInput], {nullable:true})
    @Type(() => EventLogWhereUniqueInput)
    connect?: Array<EventLogWhereUniqueInput>;
}
