import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActionUpdateWithoutEventsInput } from './action-update-without-events.input';
import { Type } from 'class-transformer';
import { ActionCreateWithoutEventsInput } from './action-create-without-events.input';

@InputType()
export class ActionUpsertWithoutEventsInput {

    @Field(() => ActionUpdateWithoutEventsInput, {nullable:false})
    @Type(() => ActionUpdateWithoutEventsInput)
    update!: ActionUpdateWithoutEventsInput;

    @Field(() => ActionCreateWithoutEventsInput, {nullable:false})
    @Type(() => ActionCreateWithoutEventsInput)
    create!: ActionCreateWithoutEventsInput;
}
