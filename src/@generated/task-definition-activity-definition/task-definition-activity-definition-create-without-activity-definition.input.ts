import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionCreateNestedOneWithoutTaskDefinitionActivityDefinitionsInput } from '../task-definition/task-definition-create-nested-one-without-task-definition-activity-definitions.input';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class TaskDefinitionActivityDefinitionCreateWithoutActivityDefinitionInput {

    @Field(() => TaskDefinitionCreateNestedOneWithoutTaskDefinitionActivityDefinitionsInput, {nullable:false})
    taskDefinition!: TaskDefinitionCreateNestedOneWithoutTaskDefinitionActivityDefinitionsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    initialValue?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
