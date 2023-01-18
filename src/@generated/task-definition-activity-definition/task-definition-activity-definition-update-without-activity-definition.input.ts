import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskDefinitionUpdateOneRequiredWithoutTaskDefinitionActivityDefinitionsNestedInput } from '../task-definition/task-definition-update-one-required-without-task-definition-activity-definitions-nested.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class TaskDefinitionActivityDefinitionUpdateWithoutActivityDefinitionInput {

    @Field(() => TaskDefinitionUpdateOneRequiredWithoutTaskDefinitionActivityDefinitionsNestedInput, {nullable:true})
    taskDefinition?: TaskDefinitionUpdateOneRequiredWithoutTaskDefinitionActivityDefinitionsNestedInput;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    initialValue?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
