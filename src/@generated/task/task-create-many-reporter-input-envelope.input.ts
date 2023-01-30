import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyReporterInput } from './task-create-many-reporter.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyReporterInputEnvelope {

    @Field(() => [TaskCreateManyReporterInput], {nullable:false})
    @Type(() => TaskCreateManyReporterInput)
    data!: Array<TaskCreateManyReporterInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
