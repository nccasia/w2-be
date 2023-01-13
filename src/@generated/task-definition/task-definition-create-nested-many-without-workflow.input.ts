import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutWorkflowInput } from './task-definition-create-without-workflow.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutWorkflowInput } from './task-definition-create-or-connect-without-workflow.input';
import { TaskDefinitionCreateManyWorkflowInputEnvelope } from './task-definition-create-many-workflow-input-envelope.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';

@InputType()
export class TaskDefinitionCreateNestedManyWithoutWorkflowInput {

    @Field(() => [TaskDefinitionCreateWithoutWorkflowInput], {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutWorkflowInput)
    create?: Array<TaskDefinitionCreateWithoutWorkflowInput>;

    @Field(() => [TaskDefinitionCreateOrConnectWithoutWorkflowInput], {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutWorkflowInput)
    connectOrCreate?: Array<TaskDefinitionCreateOrConnectWithoutWorkflowInput>;

    @Field(() => TaskDefinitionCreateManyWorkflowInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionCreateManyWorkflowInputEnvelope)
    createMany?: TaskDefinitionCreateManyWorkflowInputEnvelope;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: Array<TaskDefinitionWhereUniqueInput>;
}
