import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutFormInput } from './task-definition-create-without-form.input';

@InputType()
export class TaskDefinitionCreateOrConnectWithoutFormInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionCreateWithoutFormInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutFormInput)
    create!: TaskDefinitionCreateWithoutFormInput;
}
