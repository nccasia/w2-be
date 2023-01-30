import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyFormInput } from './task-create-many-form.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyFormInputEnvelope {

    @Field(() => [TaskCreateManyFormInput], {nullable:false})
    @Type(() => TaskCreateManyFormInput)
    data!: Array<TaskCreateManyFormInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
