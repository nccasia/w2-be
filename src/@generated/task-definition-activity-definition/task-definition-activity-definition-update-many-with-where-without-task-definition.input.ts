import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionScalarWhereInput } from './task-definition-activity-definition-scalar-where.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionUpdateManyMutationInput } from './task-definition-activity-definition-update-many-mutation.input';

@InputType()
export class TaskDefinitionActivityDefinitionUpdateManyWithWhereWithoutTaskDefinitionInput {

    @Field(() => TaskDefinitionActivityDefinitionScalarWhereInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionScalarWhereInput)
    where!: TaskDefinitionActivityDefinitionScalarWhereInput;

    @Field(() => TaskDefinitionActivityDefinitionUpdateManyMutationInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionUpdateManyMutationInput)
    data!: TaskDefinitionActivityDefinitionUpdateManyMutationInput;
}
