import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput } from './task-definition-activity-definition-create-without-activity-definition.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionCreateOrConnectWithoutActivityDefinitionInput } from './task-definition-activity-definition-create-or-connect-without-activity-definition.input';
import { TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInputEnvelope } from './task-definition-activity-definition-create-many-activity-definition-input-envelope.input';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';

@InputType()
export class TaskDefinitionActivityDefinitionUncheckedCreateNestedManyWithoutActivityDefinitionInput {

    @Field(() => [TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput)
    create?: Array<TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput>;

    @Field(() => [TaskDefinitionActivityDefinitionCreateOrConnectWithoutActivityDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionCreateOrConnectWithoutActivityDefinitionInput)
    connectOrCreate?: Array<TaskDefinitionActivityDefinitionCreateOrConnectWithoutActivityDefinitionInput>;

    @Field(() => TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInputEnvelope)
    createMany?: TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInputEnvelope;

    @Field(() => [TaskDefinitionActivityDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    connect?: Array<TaskDefinitionActivityDefinitionWhereUniqueInput>;
}
