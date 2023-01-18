import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionUpdateWithoutFormDefinetionInput } from './task-definition-update-without-form-definetion.input';

@InputType()
export class TaskDefinitionUpdateWithWhereUniqueWithoutFormDefinetionInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutFormDefinetionInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutFormDefinetionInput)
    data!: TaskDefinitionUpdateWithoutFormDefinetionInput;
}
