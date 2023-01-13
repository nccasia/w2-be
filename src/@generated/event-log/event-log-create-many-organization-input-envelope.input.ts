import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogCreateManyOrganizationInput } from './event-log-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class EventLogCreateManyOrganizationInputEnvelope {

    @Field(() => [EventLogCreateManyOrganizationInput], {nullable:false})
    @Type(() => EventLogCreateManyOrganizationInput)
    data!: Array<EventLogCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
