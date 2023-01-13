import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActionWhereUniqueInput } from './action-where-unique.input';
import { Type } from 'class-transformer';
import { ActionCreateWithoutEventsInput } from './action-create-without-events.input';

@InputType()
export class ActionCreateOrConnectWithoutEventsInput {

    @Field(() => ActionWhereUniqueInput, {nullable:false})
    @Type(() => ActionWhereUniqueInput)
    where!: ActionWhereUniqueInput;

    @Field(() => ActionCreateWithoutEventsInput, {nullable:false})
    @Type(() => ActionCreateWithoutEventsInput)
    create!: ActionCreateWithoutEventsInput;
}
