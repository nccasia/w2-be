import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventLogUpdateManyMutationInput } from './event-log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventLogWhereInput } from './event-log-where.input';

@ArgsType()
export class UpdateManyEventLogArgs {

    @Field(() => EventLogUpdateManyMutationInput, {nullable:false})
    @Type(() => EventLogUpdateManyMutationInput)
    data!: EventLogUpdateManyMutationInput;

    @Field(() => EventLogWhereInput, {nullable:true})
    @Type(() => EventLogWhereInput)
    where?: EventLogWhereInput;
}
