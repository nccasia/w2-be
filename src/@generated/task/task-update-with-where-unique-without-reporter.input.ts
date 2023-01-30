import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutReporterInput } from './task-update-without-reporter.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutReporterInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutReporterInput, {nullable:false})
    @Type(() => TaskUpdateWithoutReporterInput)
    data!: TaskUpdateWithoutReporterInput;
}
