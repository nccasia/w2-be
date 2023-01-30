import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutReporterInput } from './task-create-without-reporter.input';
import { Type } from 'class-transformer';
import { TaskCreateOrConnectWithoutReporterInput } from './task-create-or-connect-without-reporter.input';
import { TaskCreateManyReporterInputEnvelope } from './task-create-many-reporter-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskUncheckedCreateNestedManyWithoutReporterInput {

    @Field(() => [TaskCreateWithoutReporterInput], {nullable:true})
    @Type(() => TaskCreateWithoutReporterInput)
    create?: Array<TaskCreateWithoutReporterInput>;

    @Field(() => [TaskCreateOrConnectWithoutReporterInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutReporterInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutReporterInput>;

    @Field(() => TaskCreateManyReporterInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyReporterInputEnvelope)
    createMany?: TaskCreateManyReporterInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<TaskWhereUniqueInput>;
}
