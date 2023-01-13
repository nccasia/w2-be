import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionWhereUniqueInput } from './task-definition-where-unique.input';
import { Type } from 'class-transformer';
import { TaskDefinitionCreateWithoutActivityInput } from './task-definition-create-without-activity.input';

@InputType()
export class TaskDefinitionCreateOrConnectWithoutActivityInput {

    @Field(() => TaskDefinitionWhereUniqueInput, {nullable:false})
    @Type(() => TaskDefinitionWhereUniqueInput)
    where!: TaskDefinitionWhereUniqueInput;

    @Field(() => TaskDefinitionCreateWithoutActivityInput, {nullable:false})
    @Type(() => TaskDefinitionCreateWithoutActivityInput)
    create!: TaskDefinitionCreateWithoutActivityInput;
}
