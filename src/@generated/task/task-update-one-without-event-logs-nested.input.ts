import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutEventLogsInput } from './task-create-without-event-logs.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutEventLogsInput } from './task-create-or-connect-without-event-logs.input';
import { TaskUpsertWithoutEventLogsInput } from './task-upsert-without-event-logs.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutEventLogsInput } from './task-update-without-event-logs.input';

@InputType()
export class TaskUpdateOneWithoutEventLogsNestedInput {

    @Field(() => TaskCreateWithoutEventLogsInput, {nullable:true})
    @Type(() => TaskCreateWithoutEventLogsInput)
    create?: TaskCreateWithoutEventLogsInput;

    @Field(() => TaskCreateOrConnectWithoutEventLogsInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutEventLogsInput)
    connectOrCreate?: TaskCreateOrConnectWithoutEventLogsInput;

    @Field(() => TaskUpsertWithoutEventLogsInput, {nullable:true})
    @Type(() => TaskUpsertWithoutEventLogsInput)
    upsert?: TaskUpsertWithoutEventLogsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutEventLogsInput, {nullable:true})
    @Type(() => TaskUpdateWithoutEventLogsInput)
    update?: TaskUpdateWithoutEventLogsInput;
}
