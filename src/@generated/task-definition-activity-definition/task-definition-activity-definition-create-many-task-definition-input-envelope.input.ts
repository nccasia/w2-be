import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInput } from './task-definition-activity-definition-create-many-task-definition.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInputEnvelope {

    @Field(() => [TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInput], {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInput)
    data!: Array<TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
