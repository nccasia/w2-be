import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutTriggerInput } from './task-create-without-trigger.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutTriggerInput } from './task-create-or-connect-without-trigger.input';
import { TaskUpsertWithoutTriggerInput } from './task-upsert-without-trigger.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutTriggerInput } from './task-update-without-trigger.input';

@InputType()
export class TaskUpdateOneWithoutTriggerNestedInput {

    @Field(() => TaskCreateWithoutTriggerInput, {nullable:true})
    @Type(() => TaskCreateWithoutTriggerInput)
    create?: TaskCreateWithoutTriggerInput;

    @Field(() => TaskCreateOrConnectWithoutTriggerInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutTriggerInput)
    connectOrCreate?: TaskCreateOrConnectWithoutTriggerInput;

    @Field(() => TaskUpsertWithoutTriggerInput, {nullable:true})
    @Type(() => TaskUpsertWithoutTriggerInput)
    upsert?: TaskUpsertWithoutTriggerInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutTriggerInput, {nullable:true})
    @Type(() => TaskUpdateWithoutTriggerInput)
    update?: TaskUpdateWithoutTriggerInput;
}
