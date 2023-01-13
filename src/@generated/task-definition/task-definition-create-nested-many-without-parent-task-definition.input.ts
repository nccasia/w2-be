import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutParentTaskDefinitionInput } from './task-definition-create-without-parent-task-definition.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutParentTaskDefinitionInput } from './task-definition-create-or-connect-without-parent-task-definition.input';
import { TaskDefinitionCreateManyParentTaskDefinitionInputEnvelope } from './task-definition-create-many-parent-task-definition-input-envelope.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';

@InputType()
export class TaskDefinitionCreateNestedManyWithoutParentTaskDefinitionInput {

    @Field(() => [TaskDefinitionCreateWithoutParentTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutParentTaskDefinitionInput)
    create?: Array<TaskDefinitionCreateWithoutParentTaskDefinitionInput>;

    @Field(() => [TaskDefinitionCreateOrConnectWithoutParentTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutParentTaskDefinitionInput)
    connectOrCreate?: Array<TaskDefinitionCreateOrConnectWithoutParentTaskDefinitionInput>;

    @Field(() => TaskDefinitionCreateManyParentTaskDefinitionInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionCreateManyParentTaskDefinitionInputEnvelope)
    createMany?: TaskDefinitionCreateManyParentTaskDefinitionInputEnvelope;

    @Field(() => [TaskDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionWhereUniqueInput)
    connect?: Array<TaskDefinitionWhereUniqueInput>;
}
