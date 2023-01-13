import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutParentTaskDefinitionInput } from './task-definition-create-without-parent-task-definition.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutParentTaskDefinitionInput } from './task-definition-create-or-connect-without-parent-task-definition.input';
import { TaskDefinitionUpsertWithWhereUniqueWithoutParentTaskDefinitionInput } from './task-definition-upsert-with-where-unique-without-parent-task-definition.input';
import { TaskDefinitionCreateManyParentTaskDefinitionInputEnvelope } from './task-definition-create-many-parent-task-definition-input-envelope.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { TaskDefinitionUpdateWithWhereUniqueWithoutParentTaskDefinitionInput } from './task-definition-update-with-where-unique-without-parent-task-definition.input';
import { TaskDefinitionUpdateManyWithWhereWithoutParentTaskDefinitionInput } from './task-definition-update-many-with-where-without-parent-task-definition.input';
import { TaskDefinitionScalarWhereInput } from './task-definition-scalar-where.input';

@InputType()
export class TaskDefinitionUpdateManyWithoutParentTaskDefinitionNestedInput {

    @Field(() => [TaskDefinitionCreateWithoutParentTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutParentTaskDefinitionInput)
    create?: Array<TaskDefinitionCreateWithoutParentTaskDefinitionInput>;

    @Field(() => [TaskDefinitionCreateOrConnectWithoutParentTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutParentTaskDefinitionInput)
    connectOrCreate?: Array<TaskDefinitionCreateOrConnectWithoutParentTaskDefinitionInput>;

    @Field(() => [TaskDefinitionUpsertWithWhereUniqueWithoutParentTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionUpsertWithWhereUniqueWithoutParentTaskDefinitionInput)
    upsert?: Array<TaskDefinitionUpsertWithWhereUniqueWithoutParentTaskDefinitionInput>;

    @Field(() => TaskDefinitionCreateManyParentTaskDefinitionInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionCreateManyParentTaskDefinitionInputEnvelope)
    createMany?: TaskDefinitionCreateManyParentTaskDefinitionInputEnvelope;

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

    @Field(() => [TaskDefinitionUpdateWithWhereUniqueWithoutParentTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionUpdateWithWhereUniqueWithoutParentTaskDefinitionInput)
    update?: Array<TaskDefinitionUpdateWithWhereUniqueWithoutParentTaskDefinitionInput>;

    @Field(() => [TaskDefinitionUpdateManyWithWhereWithoutParentTaskDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionUpdateManyWithWhereWithoutParentTaskDefinitionInput)
    updateMany?: Array<TaskDefinitionUpdateManyWithWhereWithoutParentTaskDefinitionInput>;

    @Field(() => [TaskDefinitionScalarWhereInput], {nullable:true})
    @Type(() => TaskDefinitionScalarWhereInput)
    deleteMany?: Array<TaskDefinitionScalarWhereInput>;
}
