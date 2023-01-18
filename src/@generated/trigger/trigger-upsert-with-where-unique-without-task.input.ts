import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TriggerWhereUniqueInput } from './trigger-where-unique.input';
import { Type } from 'class-transformer';
import { TriggerUpdateWithoutTaskInput } from './trigger-update-without-task.input';
import { TriggerCreateWithoutTaskInput } from './trigger-create-without-task.input';

@InputType()
export class TriggerUpsertWithWhereUniqueWithoutTaskInput {

    @Field(() => TriggerWhereUniqueInput, {nullable:false})
    @Type(() => TriggerWhereUniqueInput)
    where!: TriggerWhereUniqueInput;

    @Field(() => TriggerUpdateWithoutTaskInput, {nullable:false})
    @Type(() => TriggerUpdateWithoutTaskInput)
    update!: TriggerUpdateWithoutTaskInput;

    @Field(() => TriggerCreateWithoutTaskInput, {nullable:false})
    @Type(() => TriggerCreateWithoutTaskInput)
    create!: TriggerCreateWithoutTaskInput;
}
