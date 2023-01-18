import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';
import { Type } from 'class-transformer';
import { TriggerUpdateWithoutTaskInput } from './trigger-update-without-task.input';

@InputType()
export class TriggerUpdateWithWhereUniqueWithoutTaskInput {

    @Field(() => TriggerWhereUniqueInput, {nullable:false})
    @Type(() => TriggerWhereUniqueInput)
    where!: TriggerWhereUniqueInput;

    @Field(() => TriggerUpdateWithoutTaskInput, {nullable:false})
    @Type(() => TriggerUpdateWithoutTaskInput)
    data!: TriggerUpdateWithoutTaskInput;
}
