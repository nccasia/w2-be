import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateWithoutTaskDefinitionsInput } from './workflow-create-without-task-definitions.input';
import { Type } from 'class-transformer';
import { WorkflowCreateOrConnectWithoutTaskDefinitionsInput } from './workflow-create-or-connect-without-task-definitions.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';

@InputType()
export class WorkflowCreateNestedOneWithoutTaskDefinitionsInput {

    @Field(() => WorkflowCreateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => WorkflowCreateWithoutTaskDefinitionsInput)
    create?: WorkflowCreateWithoutTaskDefinitionsInput;

    @Field(() => WorkflowCreateOrConnectWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => WorkflowCreateOrConnectWithoutTaskDefinitionsInput)
    connectOrCreate?: WorkflowCreateOrConnectWithoutTaskDefinitionsInput;

    @Field(() => WorkflowWhereUniqueInput, {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    connect?: WorkflowWhereUniqueInput;
}
