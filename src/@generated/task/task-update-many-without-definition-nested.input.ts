import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutDefinitionInput } from './task-create-without-definition.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutDefinitionInput } from './task-create-or-connect-without-definition.input';
import { TaskUpsertWithWhereUniqueWithoutDefinitionInput } from './task-upsert-with-where-unique-without-definition.input';
import { TaskCreateManyDefinitionInputEnvelope } from './task-create-many-definition-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutDefinitionInput } from './task-update-with-where-unique-without-definition.input';
import { TaskUpdateManyWithWhereWithoutDefinitionInput } from './task-update-many-with-where-without-definition.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUpdateManyWithoutDefinitionNestedInput {

    @Field(() => [TaskCreateWithoutDefinitionInput], {nullable:true})
    @Type(() => TaskCreateWithoutDefinitionInput)
    create?: Array<TaskCreateWithoutDefinitionInput>;

    @Field(() => [TaskCreateOrConnectWithoutDefinitionInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutDefinitionInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutDefinitionInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutDefinitionInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutDefinitionInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutDefinitionInput>;

    @Field(() => TaskCreateManyDefinitionInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyDefinitionInputEnvelope)
    createMany?: TaskCreateManyDefinitionInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    set?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    disconnect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    delete?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutDefinitionInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutDefinitionInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutDefinitionInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutDefinitionInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutDefinitionInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutDefinitionInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}
