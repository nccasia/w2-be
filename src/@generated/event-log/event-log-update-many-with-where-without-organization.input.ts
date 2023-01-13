import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogScalarWhereInput } from './event-log-scalar-where.input';
import { Type } from 'class-transformer';
import { EventLogUpdateManyMutationInput } from './event-log-update-many-mutation.input';

@InputType()
export class EventLogUpdateManyWithWhereWithoutOrganizationInput {

    @Field(() => EventLogScalarWhereInput, {nullable:false})
    @Type(() => EventLogScalarWhereInput)
    where!: EventLogScalarWhereInput;

    @Field(() => EventLogUpdateManyMutationInput, {nullable:false})
    @Type(() => EventLogUpdateManyMutationInput)
    data!: EventLogUpdateManyMutationInput;
}
