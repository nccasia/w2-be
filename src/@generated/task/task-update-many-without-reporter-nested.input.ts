import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutReporterInput } from './task-create-without-reporter.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutReporterInput } from './task-create-or-connect-without-reporter.input';
import { TaskUpsertWithWhereUniqueWithoutReporterInput } from './task-upsert-with-where-unique-without-reporter.input';
import { TaskCreateManyReporterInputEnvelope } from './task-create-many-reporter-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutReporterInput } from './task-update-with-where-unique-without-reporter.input';
import { TaskUpdateManyWithWhereWithoutReporterInput } from './task-update-many-with-where-without-reporter.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUpdateManyWithoutReporterNestedInput {

    @Field(() => [TaskCreateWithoutReporterInput], {nullable:true})
    @Type(() => TaskCreateWithoutReporterInput)
    create?: Array<TaskCreateWithoutReporterInput>;

    @Field(() => [TaskCreateOrConnectWithoutReporterInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutReporterInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutReporterInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutReporterInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutReporterInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutReporterInput>;

    @Field(() => TaskCreateManyReporterInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyReporterInputEnvelope)
    createMany?: TaskCreateManyReporterInputEnvelope;

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

    @Field(() => [TaskUpdateWithWhereUniqueWithoutReporterInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutReporterInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutReporterInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutReporterInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutReporterInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutReporterInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}
