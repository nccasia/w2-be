import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateManyFormInput } from './task-definition-create-many-form.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskDefinitionCreateManyFormInputEnvelope {

    @Field(() => [TaskDefinitionCreateManyFormInput], {nullable:false})
    @Type(() => TaskDefinitionCreateManyFormInput)
    data!: Array<TaskDefinitionCreateManyFormInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
