import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutFormDefinetionInput } from './task-definition-create-without-form-definetion.input';

@InputType()
export class TaskDefinitionCreateOrConnectWithoutFormDefinetionInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionCreateWithoutFormDefinetionInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutFormDefinetionInput)
    create!: TaskDefinitionCreateWithoutFormDefinetionInput;
}
