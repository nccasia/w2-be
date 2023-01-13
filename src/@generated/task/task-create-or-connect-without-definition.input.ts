import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { Type } from 'class-transformer';
import { TaskCreateWithoutDefinitionInput } from './task-create-without-definition.input';

@InputType()
export class TaskCreateOrConnectWithoutDefinitionInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutDefinitionInput, {nullable:false})
    @Type(() => TaskCreateWithoutDefinitionInput)
    create!: TaskCreateWithoutDefinitionInput;
}
