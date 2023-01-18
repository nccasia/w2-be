import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutTriggerInput } from './task-update-without-trigger.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutTriggerInput } from './task-create-without-trigger.input';

@InputType()
export class TaskUpsertWithoutTriggerInput {

    @Field(() => TaskUpdateWithoutTriggerInput, {nullable:false})
    @Type(() => TaskUpdateWithoutTriggerInput)
    update!: TaskUpdateWithoutTriggerInput;

    @Field(() => TaskCreateWithoutTriggerInput, {nullable:false})
    @Type(() => TaskCreateWithoutTriggerInput)
    create!: TaskCreateWithoutTriggerInput;
}
