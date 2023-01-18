import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionActivityDefinitionWhereUniqueInput } from './task-definition-activity-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionActivityDefinitionUpdateWithoutActivityDefinitionInput } from './task-definition-activity-definition-update-without-activity-definition.input';
import { TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput } from './task-definition-activity-definition-create-without-activity-definition.input';

@InputType()
export class TaskDefinitionActivityDefinitionUpsertWithWhereUniqueWithoutActivityDefinitionInput {

    @Field(() => TaskDefinitionActivityDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionWhereUniqueInput)
    where!: TaskDefinitionActivityDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionActivityDefinitionUpdateWithoutActivityDefinitionInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionUpdateWithoutActivityDefinitionInput)
    update!: TaskDefinitionActivityDefinitionUpdateWithoutActivityDefinitionInput;

    @Field(() => TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput, {nullable:false})
    @Type(() => TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput)
    create!: TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput;
}
