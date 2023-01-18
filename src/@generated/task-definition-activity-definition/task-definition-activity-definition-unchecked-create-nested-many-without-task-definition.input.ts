import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput } from './task-definition-activity-definition-create-without-task-definition.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionCreateOrConnectWithoutTaskDefinitionInput } from './task-definition-activity-definition-create-or-connect-without-task-definition.input';
import { TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInputEnvelope } from './task-definition-activity-definition-create-many-task-definition-input-envelope.input';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';

@InputType()
export class TaskDefinitionActivityDefinitionUncheckedCreateNestedManyWithoutTaskDefinitionInput {

    @Field(() => [TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput)
    create?: Array<TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput>;

    @Field(() => [TaskDefinitionActivityDefinitionCreateOrConnectWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionCreateOrConnectWithoutTaskDefinitionInput)
    connectOrCreate?: Array<TaskDefinitionActivityDefinitionCreateOrConnectWithoutTaskDefinitionInput>;

    @Field(() => TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInputEnvelope)
    createMany?: TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInputEnvelope;

    @Field(() => [TaskDefinitionActivityDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    connect?: Array<TaskDefinitionActivityDefinitionWhereUniqueInput>;
}
