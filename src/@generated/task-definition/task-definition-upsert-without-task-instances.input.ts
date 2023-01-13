import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionUpdateWithoutTaskInstancesInput } from './task-definition-update-without-task-instances.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutTaskInstancesInput } from './task-definition-create-without-task-instances.input';

@InputType()
export class TaskDefinitionUpsertWithoutTaskInstancesInput {

    @Field(() => TaskDefinitionUpdateWithoutTaskInstancesInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutTaskInstancesInput)
    update!: TaskDefinitionUpdateWithoutTaskInstancesInput;

    @Field(() => TaskDefinitionCreateWithoutTaskInstancesInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutTaskInstancesInput)
    create!: TaskDefinitionCreateWithoutTaskInstancesInput;
}
