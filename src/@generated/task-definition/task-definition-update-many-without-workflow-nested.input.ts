import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutWorkflowInput } from './task-definition-create-without-workflow.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutWorkflowInput } from './task-definition-create-or-connect-without-workflow.input';
import { TaskDefinitionUpsertWithWhereUniqueWithoutWorkflowInput } from './task-definition-upsert-with-where-unique-without-workflow.input';
import { TaskDefinitionCreateManyWorkflowInputEnvelope } from './task-definition-create-many-workflow-input-envelope.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { TaskDefinitionUpdateWithWhereUniqueWithoutWorkflowInput } from './task-definition-update-with-where-unique-without-workflow.input';
import { TaskDefinitionUpdateManyWithWhereWithoutWorkflowInput } from './task-definition-update-many-with-where-without-workflow.input';
import { TaskDefinitionScalarWhereInput } from './task-definition-scalar-where.input';

@InputType()
export class TaskDefinitionUpdateManyWithoutWorkflowNestedInput {

    @Field(() => [TaskDefinitionCreateWithoutWorkflowInput], {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutWorkflowInput)
    create?: Array<TaskDefinitionCreateWithoutWorkflowInput>;

    @Field(() => [TaskDefinitionCreateOrConnectWithoutWorkflowInput], {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutWorkflowInput)
    connectOrCreate?: Array<TaskDefinitionCreateOrConnectWithoutWorkflowInput>;

    @Field(() => [TaskDefinitionUpsertWithWhereUniqueWithoutWorkflowInput], {nullable:true})
    @Type(() => TaskDefinitionUpsertWithWhereUniqueWithoutWorkflowInput)
    upsert?: Array<TaskDefinitionUpsertWithWhereUniqueWithoutWorkflowInput>;

    @Field(() => TaskDefinitionCreateManyWorkflowInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionCreateManyWorkflowInputEnvelope)
    createMany?: TaskDefinitionCreateManyWorkflowInputEnvelope;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    set?: Array<TaskDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    disconnect?: Array<TaskDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    delete?: Array<TaskDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: Array<TaskDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionUpdateWithWhereUniqueWithoutWorkflowInput], {nullable:true})
    @Type(() => TaskDefinitionUpdateWithWhereUniqueWithoutWorkflowInput)
    update?: Array<TaskDefinitionUpdateWithWhereUniqueWithoutWorkflowInput>;

    @Field(() => [TaskDefinitionUpdateManyWithWhereWithoutWorkflowInput], {nullable:true})
    @Type(() => TaskDefinitionUpdateManyWithWhereWithoutWorkflowInput)
    updateMany?: Array<TaskDefinitionUpdateManyWithWhereWithoutWorkflowInput>;

    @Field(() => [TaskDefinitionScalarWhereInput], {nullable:true})
    @Type(() => TaskDefinitionScalarWhereInput)
    deleteMany?: Array<TaskDefinitionScalarWhereInput>;
}
