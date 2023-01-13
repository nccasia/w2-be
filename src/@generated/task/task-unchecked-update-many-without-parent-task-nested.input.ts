import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutParentTaskInput } from './task-create-without-parent-task.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutParentTaskInput } from './task-create-or-connect-without-parent-task.input';
import { TaskUpsertWithWhereUniqueWithoutParentTaskInput } from './task-upsert-with-where-unique-without-parent-task.input';
import { TaskCreateManyParentTaskInputEnvelope } from './task-create-many-parent-task-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutParentTaskInput } from './task-update-with-where-unique-without-parent-task.input';
import { TaskUpdateManyWithWhereWithoutParentTaskInput } from './task-update-many-with-where-without-parent-task.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUncheckedUpdateManyWithoutParentTaskNestedInput {

    @Field(() => [TaskCreateWithoutParentTaskInput], {nullable:true})
    @Type(() => TaskCreateWithoutParentTaskInput)
    create?: Array<TaskCreateWithoutParentTaskInput>;

    @Field(() => [TaskCreateOrConnectWithoutParentTaskInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutParentTaskInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutParentTaskInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutParentTaskInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutParentTaskInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutParentTaskInput>;

    @Field(() => TaskCreateManyParentTaskInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyParentTaskInputEnvelope)
    createMany?: TaskCreateManyParentTaskInputEnvelope;

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

    @Field(() => [TaskUpdateWithWhereUniqueWithoutParentTaskInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutParentTaskInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutParentTaskInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutParentTaskInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutParentTaskInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutParentTaskInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}
