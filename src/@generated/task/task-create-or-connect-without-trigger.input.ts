import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutTriggerInput } from './task-create-without-trigger.input';

@InputType()
export class TaskCreateOrConnectWithoutTriggerInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutTriggerInput, {nullable:false})
    @Type(() => TaskCreateWithoutTriggerInput)
    create!: TaskCreateWithoutTriggerInput;
}
