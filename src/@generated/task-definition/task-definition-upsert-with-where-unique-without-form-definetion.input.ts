import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionUpdateWithoutFormDefinetionInput } from './task-definition-update-without-form-definetion.input';
import { TaskDefinitionCreateWithoutFormDefinetionInput } from './task-definition-create-without-form-definetion.input';

@InputType()
export class TaskDefinitionUpsertWithWhereUniqueWithoutFormDefinetionInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutFormDefinetionInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutFormDefinetionInput)
    update!: TaskDefinitionUpdateWithoutFormDefinetionInput;

    @Field(() => TaskDefinitionCreateWithoutFormDefinetionInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutFormDefinetionInput)
    create!: TaskDefinitionCreateWithoutFormDefinetionInput;
}
