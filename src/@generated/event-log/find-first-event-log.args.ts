import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventLogWhereInput } from './event-log-where.input';
import { Type } from 'class-transformer';
import { EventLogOrderByWithRelationInput } from './event-log-order-by-with-relation.input';
import { EventLogWhereUniqueInput } from './event-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventLogScalarFieldEnum } from './event-log-scalar-field.enum';

@ArgsType()
export class FindFirstEventLogArgs {

    @Field(() => EventLogWhereInput, {nullable:true})
    @Type(() => EventLogWhereInput)
    where?: EventLogWhereInput;

    @Field(() => [EventLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventLogOrderByWithRelationInput>;

    @Field(() => EventLogWhereUniqueInput, {nullable:true})
    cursor?: EventLogWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EventLogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventLogScalarFieldEnum>;
}
