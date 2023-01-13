import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventLogUpdateInput } from './event-log-update.input';
import { Type } from 'class-transformer';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';

@ArgsType()
export class UpdateOneEventLogArgs {

    @Field(() => EventLogUpdateInput, {nullable:false})
    @Type(() => EventLogUpdateInput)
    data!: EventLogUpdateInput;

    @Field(() => EventLogWhereUniqueInput, {nullable:false})
    @Type(() => EventLogWhereUniqueInput)
    where!: EventLogWhereUniqueInput;
}
