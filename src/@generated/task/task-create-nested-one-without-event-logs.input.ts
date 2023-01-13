import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutEventLogsInput } from './task-create-without-event-logs.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutEventLogsInput } from './task-create-or-connect-without-event-logs.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutEventLogsInput {

    @Field(() => TaskCreateWithoutEventLogsInput, {nullable:true})
    @Type(() => TaskCreateWithoutEventLogsInput)
    create?: TaskCreateWithoutEventLogsInput;

    @Field(() => TaskCreateOrConnectWithoutEventLogsInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutEventLogsInput)
    connectOrCreate?: TaskCreateOrConnectWithoutEventLogsInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;
}
