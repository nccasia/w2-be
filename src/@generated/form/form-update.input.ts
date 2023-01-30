import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskDefinitionUpdateManyWithoutFormNestedInput } from '../task-definition/task-definition-update-many-without-form-nested.input';
import { TaskUpdateManyWithoutFormNestedInput } from '../task/task-update-many-without-form-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class FormUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    schema?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    config?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    validationConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    triggerConfig?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    serializerConfig?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    displayTemplate?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    displayConfig?: any;

    @Field(() => TaskDefinitionUpdateManyWithoutFormNestedInput, {nullable:true})
    taskDefinitions?: TaskDefinitionUpdateManyWithoutFormNestedInput;

    @Field(() => TaskUpdateManyWithoutFormNestedInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutFormNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
