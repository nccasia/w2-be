import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionUpdateWithoutFormInput } from './task-definition-update-without-form.input';
import { TaskDefinitionCreateWithoutFormInput } from './task-definition-create-without-form.input';

@InputType()
export class TaskDefinitionUpsertWithWhereUniqueWithoutFormInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutFormInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutFormInput)
    update!: TaskDefinitionUpdateWithoutFormInput;

    @Field(() => TaskDefinitionCreateWithoutFormInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutFormInput)
    create!: TaskDefinitionCreateWithoutFormInput;
}
