import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutEventLogsInput } from './task-create-without-event-logs.input';

@InputType()
export class TaskCreateOrConnectWithoutEventLogsInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutEventLogsInput, {nullable:false})
    @Type(() => TaskCreateWithoutEventLogsInput)
    create!: TaskCreateWithoutEventLogsInput;
}
