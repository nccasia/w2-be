import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventLogCreateInput } from './event-log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventLogArgs {

    @Field(() => EventLogCreateInput, {nullable:false})
    @Type(() => EventLogCreateInput)
    data!: EventLogCreateInput;
}
