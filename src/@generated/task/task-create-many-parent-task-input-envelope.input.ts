import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyParentTaskInput } from './task-create-many-parent-task.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyParentTaskInputEnvelope {

    @Field(() => [TaskCreateManyParentTaskInput], {nullable:false})
    @Type(() => TaskCreateManyParentTaskInput)
    data!: Array<TaskCreateManyParentTaskInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
