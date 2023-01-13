import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionUpdateWithoutActivityInput } from './task-definition-update-without-activity.input';
import { TaskDefinitionCreateWithoutActivityInput } from './task-definition-create-without-activity.input';

@InputType()
export class TaskDefinitionUpsertWithWhereUniqueWithoutActivityInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionUpdateWithoutActivityInput, {nullable:false})
    @Type(() => TaskDefinitionUpdateWithoutActivityInput)
    update!: TaskDefinitionUpdateWithoutActivityInput;

    @Field(() => TaskDefinitionCreateWithoutActivityInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutActivityInput)
    create!: TaskDefinitionCreateWithoutActivityInput;
}
