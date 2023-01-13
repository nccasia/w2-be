import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { Type } from 'class-transformer';
import { EventLogCreateWithoutOrganizationInput } from './event-log-create-without-organization.input';

@InputType()
export class EventLogCreateOrConnectWithoutOrganizationInput {

    @Field(() => EventLogWhereUniqueInput, {nullable:false})
    @Type(() => EventLogWhereUniqueInput)
    where!: EventLogWhereUniqueInput;

    @Field(() => EventLogCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => EventLogCreateWithoutOrganizationInput)
    create!: EventLogCreateWithoutOrganizationInput;
}
