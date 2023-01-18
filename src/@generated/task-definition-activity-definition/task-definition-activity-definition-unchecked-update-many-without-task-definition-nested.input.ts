import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput } from './task-definition-activity-definition-create-without-task-definition.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionCreateOrConnectWithoutTaskDefinitionInput } from './task-definition-activity-definition-create-or-connect-without-task-definition.input';
import { TaskDefinitionActivityDefinitionUpsertWithWhereUniqueWithoutTaskDefinitionInput } from './task-definition-activity-definition-upsert-with-where-unique-without-task-definition.input';
import { TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInputEnvelope } from './task-definition-activity-definition-create-many-task-definition-input-envelope.input';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';
import { TaskDefinitionActivityDefinitionUpdateWithWhereUniqueWithoutTaskDefinitionInput } from './task-definition-activity-definition-update-with-where-unique-without-task-definition.input';
import { TaskDefinitionActivityDefinitionUpdateManyWithWhereWithoutTaskDefinitionInput } from './task-definition-activity-definition-update-many-with-where-without-task-definition.input';
import { TaskDefinitionActivityDefinitionScalarWhereInput } from './task-definition-activity-definition-scalar-where.input';

@InputType()
export class TaskDefinitionActivityDefinitionUncheckedUpdateManyWithoutTaskDefinitionNestedInput {

    @Field(() => [TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput)
    create?: Array<TaskDefinitionActivityDefinitionCreateWithoutTaskDefinitionInput>;

    @Field(() => [TaskDefinitionActivityDefinitionCreateOrConnectWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionCreateOrConnectWithoutTaskDefinitionInput)
    connectOrCreate?: Array<TaskDefinitionActivityDefinitionCreateOrConnectWithoutTaskDefinitionInput>;

    @Field(() => [TaskDefinitionActivityDefinitionUpsertWithWhereUniqueWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionUpsertWithWhereUniqueWithoutTaskDefinitionInput)
    upsert?: Array<TaskDefinitionActivityDefinitionUpsertWithWhereUniqueWithoutTaskDefinitionInput>;

    @Field(() => TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInputEnvelope)
    createMany?: TaskDefinitionActivityDefinitionCreateManyTaskDefinitionInputEnvelope;

    @Field(() => [TaskDefinitionActivityDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    set?: Array<TaskDefinitionActivityDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionActivityDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    disconnect?: Array<TaskDefinitionActivityDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionActivityDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    delete?: Array<TaskDefinitionActivityDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionActivityDefinitionWhereUniqueInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    connect?: Array<TaskDefinitionActivityDefinitionWhereUniqueInput>;

    @Field(() => [TaskDefinitionActivityDefinitionUpdateWithWhereUniqueWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionUpdateWithWhereUniqueWithoutTaskDefinitionInput)
    update?: Array<TaskDefinitionActivityDefinitionUpdateWithWhereUniqueWithoutTaskDefinitionInput>;

    @Field(() => [TaskDefinitionActivityDefinitionUpdateManyWithWhereWithoutTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionUpdateManyWithWhereWithoutTaskDefinitionInput)
    updateMany?: Array<TaskDefinitionActivityDefinitionUpdateManyWithWhereWithoutTaskDefinitionInput>;

    @Field(() => [TaskDefinitionActivityDefinitionScalarWhereInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionScalarWhereInput)
    deleteMany?: Array<TaskDefinitionActivityDefinitionScalarWhereInput>;
}
