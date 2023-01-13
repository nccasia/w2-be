import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskUpdateWithoutEventLogsInput } from './task-update-without-event-logs.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutEventLogsInput } from './task-create-without-event-logs.input';

@InputType()
export class TaskUpsertWithoutEventLogsInput {

    @Field(() => TaskUpdateWithoutEventLogsInput, {nullable:false})
    @Type(() => TaskUpdateWithoutEventLogsInput)
    update!: TaskUpdateWithoutEventLogsInput;

    @Field(() => TaskCreateWithoutEventLogsInput, {nullable:false})
    @Type(() => TaskCreateWithoutEventLogsInput)
    create!: TaskCreateWithoutEventLogsInput;
}
