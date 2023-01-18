import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutTriggerInput } from './task-create-without-trigger.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutTriggerInput } from './task-create-or-connect-without-trigger.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedOneWithoutTriggerInput {

    @Field(() => TaskCreateWithoutTriggerInput, {nullable:true})
    @Type(() => TaskCreateWithoutTriggerInput)
    create?: TaskCreateWithoutTriggerInput;

    @Field(() => TaskCreateOrConnectWithoutTriggerInput, {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutTriggerInput)
    connectOrCreate?: TaskCreateOrConnectWithoutTriggerInput;

    @Field(() => TaskWhereUniqueInput, {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: TaskWhereUniqueInput;
}
