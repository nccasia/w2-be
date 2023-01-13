import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { Type } from 'class-transformer';
import { EventLogUpdateWithoutOrganizationInput } from './event-log-update-without-organization.input';

@InputType()
export class EventLogUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => EventLogWhereUniqueInput, {nullable:false})
    @Type(() => EventLogWhereUniqueInput)
    where!: EventLogWhereUniqueInput;

    @Field(() => EventLogUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => EventLogUpdateWithoutOrganizationInput)
    data!: EventLogUpdateWithoutOrganizationInput;
}
