import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutDefinitionInput } from './task-update-without-definition.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutDefinitionInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutDefinitionInput, {nullable:false})
    @Type(() => TaskUpdateWithoutDefinitionInput)
    data!: TaskUpdateWithoutDefinitionInput;
}
