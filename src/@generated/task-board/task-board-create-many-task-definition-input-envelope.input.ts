import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskBoardCreateManyTaskDefinitionInput } from './task-board-create-many-task-definition.input';
import { Type } from 'class-transformer';

@InputType()
export class TaskBoardCreateManyTaskDefinitionInputEnvelope {

    @Field(() => [TaskBoardCreateManyTaskDefinitionInput], {nullable:false})
    @Type(() => TaskBoardCreateManyTaskDefinitionInput)
    data!: Array<TaskBoardCreateManyTaskDefinitionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
