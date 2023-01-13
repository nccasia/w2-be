import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventLogWhereInput } from './event-log-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEventLogArgs {

    @Field(() => EventLogWhereInput, {nullable:true})
    @Type(() => EventLogWhereInput)
    where?: EventLogWhereInput;
}
