import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkflowCreateWithoutTaskDefinitionsInput } from './workflow-create-without-task-definitions.input';
import { Type } from 'class-transformer';
import { WorkflowCreateOrConnectWithoutTaskDefinitionsInput } from './workflow-create-or-connect-without-task-definitions.input';
import { WorkflowUpsertWithoutTaskDefinitionsInput } from './workflow-upsert-without-task-definitions.input';
import { WorkflowWhereUniqueInput } from './workflow-where-unique.input';
import { WorkflowUpdateWithoutTaskDefinitionsInput } from './workflow-update-without-task-definitions.input';

@InputType()
export class WorkflowUpdateOneWithoutTaskDefinitionsNestedInput {

    @Field(() => WorkflowCreateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => WorkflowCreateWithoutTaskDefinitionsInput)
    create?: WorkflowCreateWithoutTaskDefinitionsInput;

    @Field(() => WorkflowCreateOrConnectWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => WorkflowCreateOrConnectWithoutTaskDefinitionsInput)
    connectOrCreate?: WorkflowCreateOrConnectWithoutTaskDefinitionsInput;

    @Field(() => WorkflowUpsertWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => WorkflowUpsertWithoutTaskDefinitionsInput)
    upsert?: WorkflowUpsertWithoutTaskDefinitionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WorkflowWhereUniqueInput, {nullable:true})
    @Type(() => WorkflowWhereUniqueInput)
    connect?: WorkflowWhereUniqueInput;

    @Field(() => WorkflowUpdateWithoutTaskDefinitionsInput, {nullable:true})
    @Type(() => WorkflowUpdateWithoutTaskDefinitionsInput)
    update?: WorkflowUpdateWithoutTaskDefinitionsInput;
}
