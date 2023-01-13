import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateManyWorkflowInput } from './task-definition-create-many-workflow.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskDefinitionCreateManyWorkflowInputEnvelope {

    @Field(() => [TaskDefinitionCreateManyWorkflowInput], {nullable:false})
    @Type(() => TaskDefinitionCreateManyWorkflowInput)
    data!: Array<TaskDefinitionCreateManyWorkflowInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
