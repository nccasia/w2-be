import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskUpdateWithoutDefinitionInput } from './task-update-without-definition.input';
import { TaskCreateWithoutDefinitionInput } from './task-create-without-definition.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutDefinitionInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutDefinitionInput, {nullable:false})
    @Type(() => TaskUpdateWithoutDefinitionInput)
    update!: TaskUpdateWithoutDefinitionInput;

    @Field(() => TaskCreateWithoutDefinitionInput, {nullable:false})
    @Type(() => TaskCreateWithoutDefinitionInput)
    create!: TaskCreateWithoutDefinitionInput;
}
