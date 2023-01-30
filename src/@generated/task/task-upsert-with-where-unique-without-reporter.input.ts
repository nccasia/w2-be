import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutReporterInput } from './task-update-without-reporter.input';
import { TaskCreateWithoutReporterInput } from './task-create-without-reporter.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutReporterInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutReporterInput, {nullable:false})
    @Type(() => TaskUpdateWithoutReporterInput)
    update!: TaskUpdateWithoutReporterInput;

    @Field(() => TaskCreateWithoutReporterInput, {nullable:false})
    @Type(() => TaskCreateWithoutReporterInput)
    create!: TaskCreateWithoutReporterInput;
}
