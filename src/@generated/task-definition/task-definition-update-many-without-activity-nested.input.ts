import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateWithoutActivityInput } from './task-definition-create-without-activity.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateOrConnectWithoutActivityInput } from './task-definition-create-or-connect-without-activity.input';
import { TaskDefinitionUpsertWithWhereUniqueWithoutActivityInput } from './task-definition-upsert-with-where-unique-without-activity.input';
import { TaskDefinitionCreateManyActivityInputEnvelope } from './task-definition-create-many-activity-input-envelope.input';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { TaskDefinitionUpdateWithWhereUniqueWithoutActivityInput } from './task-definition-update-with-where-unique-without-activity.input';
import { TaskDefinitionUpdateManyWithWhereWithoutActivityInput } from './task-definition-update-many-with-where-without-activity.input';
import { TaskDefinitionScalarWhereInput } from './task-definition-scalar-where.input';

@InputType()
export class TaskDefinitionUpdateManyWithoutActivityNestedInput {

    @Field(() => [TaskDefinitionCreateWithoutActivityInput], {nullable:true})
    @Type(() => TaskDefinitionCreateWithoutActivityInput)
    create?: Array<TaskDefinitionCreateWithoutActivityInput>;

    @Field(() => [TaskDefinitionCreateOrConnectWithoutActivityInput], {nullable:true})
    @Type(() => TaskDefinitionCreateOrConnectWithoutActivityInput)
    connectOrCreate?: Array<TaskDefinitionCreateOrConnectWithoutActivityInput>;

    @Field(() => [TaskDefinitionUpsertWithWhereUniqueWithoutActivityInput], {nullable:true})
    @Type(() => TaskDefinitionUpsertWithWhereUniqueWithoutActivityInput)
    upsert?: Array<TaskDefinitionUpsertWithWhereUniqueWithoutActivityInput>;

    @Field(() => TaskDefinitionCreateManyActivityInputEnvelope, {nullable:true})
    @Type(() => TaskDefinitionCreateManyActivityInputEnvelope)
    createMany?: TaskDefinitionCreateManyActivityInputEnvelope;

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

    @Field(() => [TaskDefinitionUpdateWithWhereUniqueWithoutActivityInput], {nullable:true})
    @Type(() => TaskDefinitionUpdateWithWhereUniqueWithoutActivityInput)
    update?: Array<TaskDefinitionUpdateWithWhereUniqueWithoutActivityInput>;

    @Field(() => [TaskDefinitionUpdateManyWithWhereWithoutActivityInput], {nullable:true})
    @Type(() => TaskDefinitionUpdateManyWithWhereWithoutActivityInput)
    updateMany?: Array<TaskDefinitionUpdateManyWithWhereWithoutActivityInput>;

    @Field(() => [TaskDefinitionScalarWhereInput], {nullable:true})
    @Type(() => TaskDefinitionScalarWhereInput)
    deleteMany?: Array<TaskDefinitionScalarWhereInput>;
}
