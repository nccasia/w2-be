import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventLogCreateManyInput } from './event-log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventLogArgs {

    @Field(() => [EventLogCreateManyInput], {nullable:false})
    @Type(() => EventLogCreateManyInput)
    data!: Array<EventLogCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
