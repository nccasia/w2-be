import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventLogWhereInput } from './event-log-where.input';

@InputType()
export class EventLogListRelationFilter {

    @Field(() => EventLogWhereInput, {nullable:true})
    every?: EventLogWhereInput;

    @Field(() => EventLogWhereInput, {nullable:true})
    some?: EventLogWhereInput;

    @Field(() => EventLogWhereInput, {nullable:true})
    none?: EventLogWhereInput;
}
