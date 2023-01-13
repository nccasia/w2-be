import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutTaskInstancesInput } from './task-definition-create-without-task-instances.input';

@InputType()
export class TaskDefinitionCreateOrConnectWithoutTaskInstancesInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionCreateWithoutTaskInstancesInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutTaskInstancesInput)
    create!: TaskDefinitionCreateWithoutTaskInstancesInput;
}
