import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { Type } from 'class-transformer';
import { EventLogCreateInput } from './event-log-create.input';
import { EventLogUpdateInput } from './event-log-update.input';

@ArgsType()
export class UpsertOneEventLogArgs {

    @Field(() => EventLogWhereUniqueInput, {nullable:false})
    @Type(() => EventLogWhereUniqueInput)
    where!: EventLogWhereUniqueInput;

    @Field(() => EventLogCreateInput, {nullable:false})
    @Type(() => EventLogCreateInput)
    create!: EventLogCreateInput;

    @Field(() => EventLogUpdateInput, {nullable:false})
    @Type(() => EventLogUpdateInput)
    update!: EventLogUpdateInput;
}
