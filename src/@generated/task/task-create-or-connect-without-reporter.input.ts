import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutReporterInput } from './task-create-without-reporter.input';

@InputType()
export class TaskCreateOrConnectWithoutReporterInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutReporterInput, {nullable:false})
    @Type(() => TaskCreateWithoutReporterInput)
    create!: TaskCreateWithoutReporterInput;
}
