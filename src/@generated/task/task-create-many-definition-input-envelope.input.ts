import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyDefinitionInput } from './task-create-many-definition.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskCreateManyDefinitionInputEnvelope {

    @Field(() => [TaskCreateManyDefinitionInput], {nullable:false})
    @Type(() => TaskCreateManyDefinitionInput)
    data!: Array<TaskCreateManyDefinitionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
