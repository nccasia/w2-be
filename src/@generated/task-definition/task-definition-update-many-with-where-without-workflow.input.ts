import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionScalarWhereInput } from './task-definition-scalar-where.input';
import { Type } from 'class-transformer';
import { TaskDefinitionUpdateManyMutationInput } from './task-definition-update-many-mutation.input';

@InputType()
export class TaskDefinitionUpdateManyWithWhereWithoutWorkflowInput {

    @Field(() => TaskDefinitionScalarWhereInput, {nullable:false})
    @Type(() => TaskDefinitionScalarWhereInput)
    where!: TaskDefinitionScalarWhereInput;

    @Field(() => TaskDefinitionUpdateManyMutationInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateManyMutationInput)
    data!: TaskDefinitionUpdateManyMutationInput;
}
