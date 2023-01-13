import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionUpdateWithoutFormInput } from './task-definition-update-without-form.input';

@InputType()
export class TaskDefinitionUpdateWithWhereUniqueWithoutFormInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutFormInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutFormInput)
    data!: TaskDefinitionUpdateWithoutFormInput;
}
