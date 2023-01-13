import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateManyActivityInput } from './task-definition-create-many-activity.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskDefinitionCreateManyActivityInputEnvelope {

    @Field(() => [TaskDefinitionCreateManyActivityInput], {nullable:false})
    @Type(() => TaskDefinitionCreateManyActivityInput)
    data!: Array<TaskDefinitionCreateManyActivityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
