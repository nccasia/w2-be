import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInput } from './task-definition-activity-definition-create-many-activity-definition.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInputEnvelope {

    @Field(() => [TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInput], {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInput)
    data!: Array<TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
