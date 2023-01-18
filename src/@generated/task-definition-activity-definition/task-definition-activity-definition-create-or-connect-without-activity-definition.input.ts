import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput } from './task-definition-activity-definition-create-without-activity-definition.input';

@InputType()
export class TaskDefinitionActivityDefinitionCreateOrConnectWithoutActivityDefinitionInput {

    @Field(() => TaskDefinitionActivityDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    where!: TaskDefinitionActivityDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput)
    create!: TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput;
}
