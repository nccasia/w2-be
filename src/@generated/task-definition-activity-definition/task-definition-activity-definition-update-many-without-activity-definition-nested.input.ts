import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput } from './task-definition-activity-definition-create-without-activity-definition.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionCreateOrConnectWithoutActivityDefinitionInput } from './task-definition-activity-definition-create-or-connect-without-activity-definition.input';
import { TaskDefinitionActivityDefinitionUpsertWithWhereUniqueWithoutActivityDefinitionInput } from './task-definition-activity-definition-upsert-with-where-unique-without-activity-definition.input';
import { TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInputEnvelope } from './task-definition-activity-definition-create-many-activity-definition-input-envelope.input';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';
import { TaskDefinitionActivityDefinitionUpdateWithWhereUniqueWithoutActivityDefinitionInput } from './task-definition-activity-definition-update-with-where-unique-without-activity-definition.input';
import { TaskDefinitionActivityDefinitionUpdateManyWithWhereWithoutActivityDefinitionInput } from './task-definition-activity-definition-update-many-with-where-without-activity-definition.input';
import { TaskDefinitionActivityDefinitionScalarWhereInput } from './task-definition-activity-definition-scalar-where.input';

@InputType()
export class TaskDefinitionActivityDefinitionUpdateManyWithoutActivityDefinitionNestedInput {

    @Field(() => [TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput)
    create?: Array<TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput>;

    @Field(() => [TaskDefinitionActivityDefinitionCreateOrConnectWithoutActivityDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionCreateOrConnectWithoutActivityDefinitionInput)
    connectOrCreate?: Array<TaskDefinitionActivityDefinitionCreateOrConnectWithoutActivityDefinitionInput>;

    @Field(() => [TaskDefinitionActivityDefinitionUpsertWithWhereUniqueWithoutActivityDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionUpsertWithWhereUniqueWithoutActivityDefinitionInput)
    upsert?: Array<TaskDefinitionActivityDefinitionUpsertWithWhereUniqueWithoutActivityDefinitionInput>;

    @Field(() => TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInputEnvelope)
    createMany?: TaskDefinitionActivityDefinitionCreateManyActivityDefinitionInputEnvelope;

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

    @Field(() => [TaskDefinitionActivityDefinitionUpdateWithWhereUniqueWithoutActivityDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionUpdateWithWhereUniqueWithoutActivityDefinitionInput)
    update?: Array<TaskDefinitionActivityDefinitionUpdateWithWhereUniqueWithoutActivityDefinitionInput>;

    @Field(() => [TaskDefinitionActivityDefinitionUpdateManyWithWhereWithoutActivityDefinitionInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionUpdateManyWithWhereWithoutActivityDefinitionInput)
    updateMany?: Array<TaskDefinitionActivityDefinitionUpdateManyWithWhereWithoutActivityDefinitionInput>;

    @Field(() => [TaskDefinitionActivityDefinitionScalarWhereInput], {nullable:true})
    @Type(() => TaskDefinitionActivityDefinitionScalarWhereInput)
    deleteMany?: Array<TaskDefinitionActivityDefinitionScalarWhereInput>;
}
