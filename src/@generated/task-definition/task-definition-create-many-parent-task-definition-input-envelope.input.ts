import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateManyParentTaskDefinitionInput } from './task-definition-create-many-parent-task-definition.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskDefinitionCreateManyParentTaskDefinitionInputEnvelope {

    @Field(() => [TaskDefinitionCreateManyParentTaskDefinitionInput], {nullable:false})
    @Type(() => TaskDefinitionCreateManyParentTaskDefinitionInput)
    data!: Array<TaskDefinitionCreateManyParentTaskDefinitionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
