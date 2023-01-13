import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutParentTaskInput } from './task-create-without-parent-task.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutParentTaskInput } from './task-create-or-connect-without-parent-task.input';
import { TaskCreateManyParentTaskInputEnvelope } from './task-create-many-parent-task-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedManyWithoutParentTaskInput {

    @Field(() => [TaskCreateWithoutParentTaskInput], {nullable:true})
    @Type(() => TaskCreateWithoutParentTaskInput)
    create?: Array<TaskCreateWithoutParentTaskInput>;

    @Field(() => [TaskCreateOrConnectWithoutParentTaskInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutParentTaskInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutParentTaskInput>;

    @Field(() => TaskCreateManyParentTaskInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyParentTaskInputEnvelope)
    createMany?: TaskCreateManyParentTaskInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;
}
